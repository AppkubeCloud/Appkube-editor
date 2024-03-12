const graphitePlugin = async () =>
  await import(/* webpackChunkName: "graphitePlugin" */ 'app/plugins/datasource/graphite/module');
const cloudwatchPlugin = async () =>
  await import(/* webpackChunkName: "cloudwatchPlugin" */ 'app/plugins/datasource/cloudwatch/module');
const dashboardDSPlugin = async () =>
  await import(/* webpackChunkName "dashboardDSPlugin" */ 'app/plugins/datasource/dashboard/module');
const elasticsearchPlugin = async () =>
  await import(/* webpackChunkName: "elasticsearchPlugin" */ 'app/plugins/datasource/elasticsearch/module');
const opentsdbPlugin = async () =>
  await import(/* webpackChunkName: "opentsdbPlugin" */ 'app/plugins/datasource/opentsdb/module');
const grafanaPlugin = async () =>
  await import(/* webpackChunkName: "grafanaPlugin" */ 'app/plugins/datasource/grafana/module');
const influxdbPlugin = async () =>
  await import(/* webpackChunkName: "influxdbPlugin" */ 'app/plugins/datasource/influxdb/module');
const lokiPlugin = async () => await import(/* webpackChunkName: "lokiPlugin" */ 'app/plugins/datasource/loki/module');
const jaegerPlugin = async () =>
  await import(/* webpackChunkName: "jaegerPlugin" */ 'app/plugins/datasource/jaeger/module');
const zipkinPlugin = async () =>
  await import(/* webpackChunkName: "zipkinPlugin" */ 'app/plugins/datasource/zipkin/module');
const mixedPlugin = async () =>
  await import(/* webpackChunkName: "mixedPlugin" */ 'app/plugins/datasource/mixed/module');
const mysqlPlugin = async () =>
  await import(/* webpackChunkName: "mysqlPlugin" */ 'app/plugins/datasource/mysql/module');
const postgresPlugin = async () =>
  await import(/* webpackChunkName: "postgresPlugin" */ 'app/plugins/datasource/postgres/module');
const prometheusPlugin = async () =>
  await import(/* webpackChunkName: "prometheusPlugin" */ 'app/plugins/datasource/prometheus/module');
const mssqlPlugin = async () =>
  await import(/* webpackChunkName: "mssqlPlugin" */ 'app/plugins/datasource/mssql/module');
const testDataDSPlugin = async () =>
  await import(/* webpackChunkName: "testDataDSPlugin" */ 'app/plugins/datasource/testdata/module');
const cloudMonitoringPlugin = async () =>
  await import(/* webpackChunkName: "cloudMonitoringPlugin" */ 'app/plugins/datasource/cloud-monitoring/module');
const azureMonitorPlugin = async () =>
  await import(
    /* webpackChunkName: "azureMonitorPlugin" */ 'app/plugins/datasource/grafana-azure-monitor-datasource/module'
  );
const tempoPlugin = async () =>
  await import(/* webpackChunkName: "tempoPlugin" */ 'app/plugins/datasource/tempo/module');
const alertmanagerPlugin = async () =>
  await import(/* webpackChunkName: "alertmanagerPlugin" */ 'app/plugins/datasource/alertmanager/module');
const phlarePlugin = async () =>
  await import(/* webpackChunkName: "phlarePlugin" */ 'app/plugins/datasource/phlare/module');
const parcaPlugin = async () =>
  await import(/* webpackChunkName: "parcaPlugin" */ 'app/plugins/datasource/parca/module');

import { config } from '@grafana/runtime';
import * as AppkubeApiServersTablePanel from 'app/plugins/panel/AppkubeApiServersTablePanel/module';
import * as AppkubeAuthenticationChartPanel from 'app/plugins/panel/AppkubeAuthenticationChartPanel/module';
import * as AppkubeBreakdownPanel from 'app/plugins/panel/AppkubeBreakdownPanel/module';
import * as AppkubeClusterCapacityPanel from 'app/plugins/panel/AppkubeClusterCapacityPanel/module';
import * as AppkubeClusterEventsTabelPanel from 'app/plugins/panel/AppkubeClusterEventsTabelPanel/module';
import * as AppkubeClusterHealthPanel from 'app/plugins/panel/AppkubeClusterHealthPanel/module';
import * as AppkubeClusterOverviewPanel from 'app/plugins/panel/AppkubeClusterOverviewPanel/module';
import * as AppkubeCompliancePanel from 'app/plugins/panel/AppkubeCompliancePanel/module';
import * as AppkubeCostByHighestSpendTargetGroupsPanel from 'app/plugins/panel/AppkubeCostByHighestSpendTargetGroupsPanel/module';
import * as AppkubeCostHighestSpendProductsPanel from 'app/plugins/panel/AppkubeCostHighestSpendProductsPanel/module';
import * as AppkubeCostOfAllProductsPanel from 'app/plugins/panel/AppkubeCostOfAllProductsPanel/module';
import * as AppkubeCpuUtilizationPanel from 'app/plugins/panel/AppkubeCpuUtilizationPanel/module';
import * as AppkubeDataLifecycleManagementPanel from 'app/plugins/panel/AppkubeDataLifecycleManagementPanel/module';
import * as AppkubeDonutChartPanel from 'app/plugins/panel/AppkubeDonutChartPanel/module';
import * as AppkubeEksResourcesPanel from 'app/plugins/panel/AppkubeEksResourcesPanel/module';
import * as AppkubeEndUsagePanel from 'app/plugins/panel/AppkubeEndUsagePanel/module';
import * as AppkubeErrorAndWarningPanel from 'app/plugins/panel/AppkubeErrorAndWarningPanel/module';
import * as AppkubeErrorOnRequestPanel from 'app/plugins/panel/AppkubeErrorOnRequestPanel/module';
import * as AppkubeExecutionTimePanel from 'app/plugins/panel/AppkubeExecutionTimePanel/module';
import * as AppkubeFlowCountPanel from 'app/plugins/panel/AppkubeFlowCountPanel/module';
import * as AppkubeFunctionByProductsPanel from 'app/plugins/panel/AppkubeFunctionByProductsPanel/module';
import * as AppkubeInstanceStatusPanel from 'app/plugins/panel/AppkubeInstanceStatusPanel/module';
import * as AppkubeKubernetesCostPanel from 'app/plugins/panel/AppkubeKubernetesCostPanel/module';
import * as AppkubeMessagesTablePanel from 'app/plugins/panel/AppkubeMessagesTablePanel/module';
import * as AppkubeMultilineChartPanel from 'app/plugins/panel/AppkubeMultilineChartPanel/module';
import * as AppkubeNodesPerformanceTablePanel from 'app/plugins/panel/AppkubeNodesPerformanceTablePanel/module';
import * as AppkubeNumberZoneChartPanel from 'app/plugins/panel/AppkubeNumberZoneChartPanel/module';
import * as AppkubeOverallBucketCompliancePanel from 'app/plugins/panel/AppkubeOverallBucketCompliancePanel/module';
import * as AppkubePerfomancePanel from 'app/plugins/panel/AppkubePerfomancePanel/module';
import * as AppkubePodsOverviewPanel from 'app/plugins/panel/AppkubePodsOverviewPanel/module';
import * as AppkubeRegionWiseStoragePanel from 'app/plugins/panel/AppkubeRegionWiseStoragePanel/module';
import * as AppkubeResoursesPanel from 'app/plugins/panel/AppkubeResoursesPanel/module';
import * as AppkubeResponseTimePanel from 'app/plugins/panel/AppkubeResponseTimePanel/module';
import * as AppkubeS3TotalCostPanel from 'app/plugins/panel/AppkubeS3TotalCostPanel/module';
import * as AppkubeSecurityPanel from 'app/plugins/panel/AppkubeSecurityPanel/module';
import * as AppkubeServiceAvailablityPanel from 'app/plugins/panel/AppkubeServiceAvailablityPanel/module';
import * as AppkubeSuccessFailedChartPanel from 'app/plugins/panel/AppkubeSuccessFailedChartPanel/module';
import * as AppkubeTablePanel from 'app/plugins/panel/AppkubeTablePanel/module';
import * as AppkubeThreatCallsPanel from 'app/plugins/panel/AppkubeThreatCallsPanel/module';
import * as AppkubeTopBackendErrorsPanel from 'app/plugins/panel/AppkubeTopBackendErrorsPanel/module';
import * as AppkubeTopBucketCompliancePanel from 'app/plugins/panel/AppkubeTopBucketCompliancePanel/module';
import * as AppkubeTopFailureFunctionsPanel from 'app/plugins/panel/AppkubeTopFailureFunctionsPanel/module';
import * as AppkubeTopProductsPanel from 'app/plugins/panel/AppkubeTopProductsPanel/module';
import * as AppkubeTopProductsWithMaxErrorsPanel from 'app/plugins/panel/AppkubeTopProductsWithMaxErrorsPanel/module';
import * as AppkubeTopResourcesRequestCountPanel from 'app/plugins/panel/AppkubeTopResourcesRequestCountPanel/module';
import * as AppkubeTopSecurityRulesTriggredPanel from 'app/plugins/panel/AppkubeTopSecurityRulesTriggredPanel/module';
import * as AppkubeTopUsedFunctionPanel from 'app/plugins/panel/AppkubeTopUsedFunctionPanel/module';
import * as AppkubeTotalCostPanel from 'app/plugins/panel/AppkubeTotalCostPanel/module';
import * as AppkubeTotalFunctionsPanel from 'app/plugins/panel/AppkubeTotalFunctionsPanel/module';
import * as AppkubeUsedFunctionTablePanel from 'app/plugins/panel/AppkubeUsedFunctionTablePanel/module';
import * as AppkubeUtilizationPanel from 'app/plugins/panel/AppkubeUtilizationPanel/module';
import * as AppkubeWiseCostPanel from 'app/plugins/panel/AppkubeWiseCostPanel/module';
import * as alertGroupsPanel from 'app/plugins/panel/alertGroups/module';
import * as alertListPanel from 'app/plugins/panel/alertlist/module';
import * as annoListPanel from 'app/plugins/panel/annolist/module';
import * as barChartPanel from 'app/plugins/panel/barchart/module';
import * as barGaugePanel from 'app/plugins/panel/bargauge/module';
import * as candlestickPanel from 'app/plugins/panel/candlestick/module';
import * as dashListPanel from 'app/plugins/panel/dashlist/module';
import * as debugPanel from 'app/plugins/panel/debug/module';
import * as flamegraphPanel from 'app/plugins/panel/flamegraph/module';
import * as gaugePanel from 'app/plugins/panel/gauge/module';
import * as gettingStartedPanel from 'app/plugins/panel/gettingstarted/module';
import * as histogramPanel from 'app/plugins/panel/histogram/module';
import * as livePanel from 'app/plugins/panel/live/module';
import * as logsPanel from 'app/plugins/panel/logs/module';
import * as newsPanel from 'app/plugins/panel/news/module';
import * as nodeGraph from 'app/plugins/panel/nodeGraph/module';
import * as pieChartPanel from 'app/plugins/panel/piechart/module';
import * as statPanel from 'app/plugins/panel/stat/module';
import * as stateTimelinePanel from 'app/plugins/panel/state-timeline/module';
import * as statusHistoryPanel from 'app/plugins/panel/status-history/module';
import * as tablePanel from 'app/plugins/panel/table/module';
import * as textPanel from 'app/plugins/panel/text/module';
import * as timeseriesPanel from 'app/plugins/panel/timeseries/module';
import * as tracesPanel from 'app/plugins/panel/traces/module';
import * as welcomeBanner from 'app/plugins/panel/welcome/module';
import * as xyChartPanel from 'app/plugins/panel/xychart/module';
// Async loaded panels
const geomapPanel = async () => await import(/* webpackChunkName: "geomapPanel" */ 'app/plugins/panel/geomap/module');
const canvasPanel = async () => await import(/* webpackChunkName: "canvasPanel" */ 'app/plugins/panel/canvas/module');
const iconPanel = async () => await import(/* webpackChunkName: "iconPanel" */ 'app/plugins/panel/icon/module');
const graphPanel = async () => await import(/* webpackChunkName: "graphPlugin" */ 'app/plugins/panel/graph/module');
const heatmapPanel = async () =>
  await import(/* webpackChunkName: "heatmapPanel" */ 'app/plugins/panel/heatmap/module');
const heatmapPanelOLD = async () =>
  await import(/* webpackChunkName: "heatmapPanelOLD" */ 'app/plugins/panel/heatmap-old/module');

const tableOldPanel = async () =>
  await import(/* webpackChunkName: "tableOldPlugin" */ 'app/plugins/panel/table-old/module');

// Automatically migrate heatmap panel.
if (config.featureToggles.useLegacyHeatmapPanel) {
  const heatmap = config.panels['heatmap'];
  const legacy = config.panels['heatmap-old'];
  legacy.id = heatmap.id;
  legacy.module = heatmap.module;
  legacy.state = heatmap.state;
  config.panels['heatmap'] = legacy;
}
delete config.panels['heatmap-old'];

const builtInPlugins: any = {
  'app/plugins/datasource/graphite/module': graphitePlugin,
  'app/plugins/datasource/cloudwatch/module': cloudwatchPlugin,
  'app/plugins/datasource/dashboard/module': dashboardDSPlugin,
  'app/plugins/datasource/elasticsearch/module': elasticsearchPlugin,
  'app/plugins/datasource/opentsdb/module': opentsdbPlugin,
  'app/plugins/datasource/grafana/module': grafanaPlugin,
  'app/plugins/datasource/influxdb/module': influxdbPlugin,
  'app/plugins/datasource/loki/module': lokiPlugin,
  'app/plugins/datasource/jaeger/module': jaegerPlugin,
  'app/plugins/datasource/zipkin/module': zipkinPlugin,
  'app/plugins/datasource/mixed/module': mixedPlugin,
  'app/plugins/datasource/mysql/module': mysqlPlugin,
  'app/plugins/datasource/postgres/module': postgresPlugin,
  'app/plugins/datasource/mssql/module': mssqlPlugin,
  'app/plugins/datasource/prometheus/module': prometheusPlugin,
  'app/plugins/datasource/testdata/module': testDataDSPlugin,
  'app/plugins/datasource/cloud-monitoring/module': cloudMonitoringPlugin,
  'app/plugins/datasource/grafana-azure-monitor-datasource/module': azureMonitorPlugin,
  'app/plugins/datasource/tempo/module': tempoPlugin,
  'app/plugins/datasource/alertmanager/module': alertmanagerPlugin,
  'app/plugins/datasource/phlare/module': phlarePlugin,
  'app/plugins/datasource/parca/module': parcaPlugin,

  'app/plugins/panel/text/module': textPanel,
  'app/plugins/panel/timeseries/module': timeseriesPanel,
  'app/plugins/panel/state-timeline/module': stateTimelinePanel,
  'app/plugins/panel/status-history/module': statusHistoryPanel,
  'app/plugins/panel/candlestick/module': candlestickPanel,
  'app/plugins/panel/graph/module': graphPanel,
  'app/plugins/panel/xychart/module': xyChartPanel,
  'app/plugins/panel/geomap/module': geomapPanel,
  'app/plugins/panel/canvas/module': canvasPanel,
  'app/plugins/panel/icon/module': iconPanel,
  'app/plugins/panel/dashlist/module': dashListPanel,
  'app/plugins/panel/alertlist/module': alertListPanel,
  'app/plugins/panel/annolist/module': annoListPanel,
  'app/plugins/panel/heatmap/module': config.featureToggles.useLegacyHeatmapPanel ? heatmapPanelOLD : heatmapPanel,
  'app/plugins/panel/table/module': tablePanel,
  'app/plugins/panel/table-old/module': tableOldPanel,
  'app/plugins/panel/news/module': newsPanel,
  'app/plugins/panel/live/module': livePanel,
  'app/plugins/panel/stat/module': statPanel,
  'app/plugins/panel/debug/module': debugPanel,
  'app/plugins/panel/flamegraph/module': flamegraphPanel,
  'app/plugins/panel/gettingstarted/module': gettingStartedPanel,
  'app/plugins/panel/gauge/module': gaugePanel,
  'app/plugins/panel/piechart/module': pieChartPanel,
  'app/plugins/panel/bargauge/module': barGaugePanel,
  'app/plugins/panel/barchart/module': barChartPanel,
  'app/plugins/panel/logs/module': logsPanel,
  'app/plugins/panel/traces/module': tracesPanel,
  'app/plugins/panel/welcome/module': welcomeBanner,
  'app/plugins/panel/nodeGraph/module': nodeGraph,
  'app/plugins/panel/histogram/module': histogramPanel,
  'app/plugins/panel/alertGroups/module': alertGroupsPanel,
  'app/plugins/panel/AppkubeUtilizationPanel/module': AppkubeUtilizationPanel,
  'app/plugins/panel/AppkubeInstanceStatusPanel/module': AppkubeInstanceStatusPanel,
  'app/plugins/panel/AppkubeTablePanel/module': AppkubeTablePanel,
  'app/plugins/panel/AppkubeCompliancePanel/module': AppkubeCompliancePanel,
  'app/plugins/panel/AppkubeTotalCostPanel/module': AppkubeTotalCostPanel,
  'app/plugins/panel/AppkubeTotalFunctionsPanel/module': AppkubeTotalFunctionsPanel,
  'app/plugins/panel/AppkubeTopUsedFunctionPanel/module': AppkubeTopUsedFunctionPanel,
  'app/plugins/panel/AppkubeResoursesPanel/module': AppkubeResoursesPanel,
  'app/plugins/panel/AppkubeTopFailureFunctionsPanel/module': AppkubeTopFailureFunctionsPanel,
  'app/plugins/panel/AppkubeTopProductsWithMaxErrorsPanel/module': AppkubeTopProductsWithMaxErrorsPanel,
  'app/plugins/panel/AppkubeBreakdownPanel/module': AppkubeBreakdownPanel,
  'app/plugins/panel/AppkubeMessagesTablePanel/module': AppkubeMessagesTablePanel,
  'app/plugins/panel/AppkubeUsedFunctionTablePanel/module': AppkubeUsedFunctionTablePanel,
  'app/plugins/panel/AppkubeExecutionTimePanel/module': AppkubeExecutionTimePanel,
  'app/plugins/panel/AppkubeThreatCallsPanel/module': AppkubeThreatCallsPanel,
  'app/plugins/panel/AppkubeClusterEventsTabelPanel/module': AppkubeClusterEventsTabelPanel,
  'app/plugins/panel/AppkubeTopSecurityRulesTriggredPanel/module': AppkubeTopSecurityRulesTriggredPanel,
  'app/plugins/panel/AppkubeTopResourcesRequestCountPanel/module': AppkubeTopResourcesRequestCountPanel,
  'app/plugins/panel/AppkubeEksResourcesPanel/module': AppkubeEksResourcesPanel,
  'app/plugins/panel/AppkubeApiServersTablePanel/module': AppkubeApiServersTablePanel,
  'app/plugins/panel/AppkubeNodesPerformanceTablePanel/module': AppkubeNodesPerformanceTablePanel,
  'app/plugins/panel/AppkubeResponseTimePanel/module': AppkubeResponseTimePanel,
  'app/plugins/panel/AppkubeKubernetesCostPanel/module': AppkubeKubernetesCostPanel,
  'app/plugins/panel/AppkubeClusterHealthPanel/module': AppkubeClusterHealthPanel,
  'app/plugins/panel/AppkubePerfomancePanel/module': AppkubePerfomancePanel,
  'app/plugins/panel/AppkubeSecurityPanel/module': AppkubeSecurityPanel,
  'app/plugins/panel/AppkubeEndUsagePanel/module': AppkubeEndUsagePanel,
  'app/plugins/panel/AppkubeS3TotalCostPanel/module': AppkubeS3TotalCostPanel,
  'app/plugins/panel/AppkubeCostOfAllProductsPanel/module': AppkubeCostOfAllProductsPanel,
  'app/plugins/panel/AppkubeCostHighestSpendProductsPanel/module': AppkubeCostHighestSpendProductsPanel,
  'app/plugins/panel/AppkubeCostByHighestSpendTargetGroupsPanel/module': AppkubeCostByHighestSpendTargetGroupsPanel,
  'app/plugins/panel/AppkubeTopBackendErrorsPanel/module': AppkubeTopBackendErrorsPanel,
  'app/plugins/panel/AppkubeErrorOnRequestPanel/module': AppkubeErrorOnRequestPanel,
  'app/plugins/panel/AppkubeTopBucketCompliancePanel/module': AppkubeTopBucketCompliancePanel,
  'app/plugins/panel/AppkubeRegionWiseStoragePanel/module': AppkubeRegionWiseStoragePanel,
  'app/plugins/panel/AppkubeTopProductsPanel/module': AppkubeTopProductsPanel,
  'app/plugins/panel/AppkubeSuccessFailedChartPanel/module': AppkubeSuccessFailedChartPanel,
  'app/plugins/panel/AppkubePodsOverviewPanel/module': AppkubePodsOverviewPanel,
  'app/plugins/panel/AppkubeClusterOverviewPanel/module': AppkubeClusterOverviewPanel,
  'app/plugins/panel/AppkubeFlowCountPanel/module': AppkubeFlowCountPanel,
  'app/plugins/panel/AppkubeDataLifecycleManagementPanel/module': AppkubeDataLifecycleManagementPanel,
  'app/plugins/panel/AppkubeOverallBucketCompliancePanel/module': AppkubeOverallBucketCompliancePanel,
  'app/plugins/panel/AppkubeCpuUtilizationPanel/module': AppkubeCpuUtilizationPanel,
  'app/plugins/panel/AppkubeNumberZoneChartPanel/module': AppkubeNumberZoneChartPanel,
  'app/plugins/panel/AppkubeMultilineChartPanel/module': AppkubeMultilineChartPanel,
  'app/plugins/panel/AppkubeDonutChartPanel/module': AppkubeDonutChartPanel,
  'app/plugins/panel/AppkubeAuthenticationChartPanel/module': AppkubeAuthenticationChartPanel,
  'app/plugins/panel/AppkubeWiseCostPanel/module': AppkubeWiseCostPanel,
  'app/plugins/panel/AppkubeClusterCapacityPanel/module': AppkubeClusterCapacityPanel,
  'app/plugins/panel/AppkubeFunctionByProductsPanel/module': AppkubeFunctionByProductsPanel,
  'app/plugins/panel/AppkubeErrorAndWarningPanel/module': AppkubeErrorAndWarningPanel,
  'app/plugins/panel/AppkubeServiceAvailablityPanel/module': AppkubeServiceAvailablityPanel,
};

export default builtInPlugins;
