import React, { useMemo } from 'react';
import { v4 } from 'uuid';

import { Field, PanelProps } from '@grafana/data';
import { PanelDataErrorView } from '@grafana/runtime';
import { TooltipDisplayMode } from '@grafana/schema';
import { KeyboardPlugin, TimeSeries, TooltipPlugin, usePanelContext, ZoomPlugin } from '@grafana/ui';
import { config } from 'app/core/config';
import { getFieldLinksForExplore } from 'app/features/explore/utils/links';

import { AnnotationEditorPlugin } from './plugins/AnnotationEditorPlugin';
import { AnnotationsPlugin } from './plugins/AnnotationsPlugin';
import { ContextMenuPlugin } from './plugins/ContextMenuPlugin';
import { ExemplarsPlugin, getVisibleLabels } from './plugins/ExemplarsPlugin';
import { OutsideRangePlugin } from './plugins/OutsideRangePlugin';
import { ThresholdControlsPlugin } from './plugins/ThresholdControlsPlugin';
import { TimeSeriesOptions } from './types';
import { getTimezones, prepareGraphableFields, regenerateLinksSupplier } from './utils';

interface TimeSeriesPanelProps extends PanelProps<TimeSeriesOptions> { }

interface QueryEditorData {
  selectedFrame: string;
}

export const TimeSeriesPanel: React.FC<TimeSeriesPanelProps> = ({
  data,
  timeRange,
  timeZone,
  width,
  height,
  options,
  fieldConfig,
  onChangeTimeRange,
  replaceVariables,
  id,
}) => {
  const { sync, canAddAnnotations, onThresholdsChange, canEditThresholds, showThresholds, onSplitOpen } =
    usePanelContext();

  const getFieldLinks = (field: Field, rowIndex: number) => {
    return getFieldLinksForExplore({ field, rowIndex, splitOpenFn: onSplitOpen, range: timeRange });
  };

  const frames = useMemo(() => prepareGraphableFields(data.series, config.theme2, timeRange), [data, timeRange]);
  const timezones = useMemo(() => getTimezones(options.timezone, timeZone), [options.timezone, timeZone]);

  if (!frames) {
    return (
      <PanelDataErrorView
        panelId={id}
        fieldConfig={fieldConfig}
        data={data}
        needsTimeField={true}
        needsNumberField={true}
      />
    );
  }

  const enableAnnotationCreation = Boolean(canAddAnnotations && canAddAnnotations());
  let selectedFrame = "";
  if (data.request && data.request?.targets[0]) {
    selectedFrame = (data.request?.targets[0] as unknown as QueryEditorData).selectedFrame;
  } else if (localStorage.getItem("datasource-selected-frame")) {
    selectedFrame = localStorage.getItem("datasource-selected-frame") as string;
  }
  let selectedFrames = [...frames];
  if (selectedFrame) {
    selectedFrames = frames.filter((frame: any) => {
      return frame.name === selectedFrame;
    });
  }
  return (
    <>
    <strong style={{
      fontSize: "18px",
      color: "#383874",
      lineHeight: "22px",
      marginBottom: "15px"
    }}>{options.title}</strong>
    <TimeSeries
      key={v4()}
      frames={selectedFrames}
      structureRev={data.structureRev}
      timeRange={timeRange}
      timeZone={timezones}
      width={width}
      height={height}
      legend={options.legend}
      options={options}
    >
      {(config, alignedDataFrame) => {
        if (
          alignedDataFrame.fields.filter((f) => f.config.links !== undefined && f.config.links.length > 0).length > 0
        ) {
          alignedDataFrame = regenerateLinksSupplier(alignedDataFrame, frames, replaceVariables, timeZone);
        }

        return (
          <>
            <KeyboardPlugin config={config} />
            <ZoomPlugin config={config} onZoom={onChangeTimeRange} />
            {options.tooltip.mode === TooltipDisplayMode.None || (
              <TooltipPlugin
                frames={frames}
                data={alignedDataFrame}
                config={config}
                mode={options.tooltip.mode}
                sortOrder={options.tooltip.sort}
                sync={sync}
                timeZone={timeZone}
              />
            )}
            {/* Renders annotation markers*/}
            {data.annotations && (
              <AnnotationsPlugin annotations={data.annotations} config={config} timeZone={timeZone} />
            )}
            {/* Enables annotations creation*/}
            {enableAnnotationCreation ? (
              <AnnotationEditorPlugin data={alignedDataFrame} timeZone={timeZone} config={config}>
                {({ startAnnotating }) => {
                  return (
                    <ContextMenuPlugin
                      data={alignedDataFrame}
                      config={config}
                      timeZone={timeZone}
                      replaceVariables={replaceVariables}
                      defaultItems={[
                        {
                          items: [
                            {
                              label: 'Add annotation',
                              ariaLabel: 'Add annotation',
                              icon: 'comment-alt',
                              onClick: (e, p) => {
                                if (!p) {
                                  return;
                                }
                                startAnnotating({ coords: p.coords });
                              },
                            },
                          ],
                        },
                      ]}
                    />
                  );
                }}
              </AnnotationEditorPlugin>
            ) : (
              <ContextMenuPlugin
                data={alignedDataFrame}
                frames={frames}
                config={config}
                timeZone={timeZone}
                replaceVariables={replaceVariables}
                defaultItems={[]}
              />
            )}
            {data.annotations && (
              <ExemplarsPlugin
                visibleSeries={getVisibleLabels(config, frames)}
                config={config}
                exemplars={data.annotations}
                timeZone={timeZone}
                getFieldLinks={getFieldLinks}
              />
            )}

            {((canEditThresholds && onThresholdsChange) || showThresholds) && (
              <ThresholdControlsPlugin
                config={config}
                fieldConfig={fieldConfig}
                onThresholdsChange={canEditThresholds ? onThresholdsChange : undefined}
              />
            )}

            <OutsideRangePlugin config={config} onChangeTimeRange={onChangeTimeRange} />
          </>
        );
      }}
    </TimeSeries>
    </>
  );
};
