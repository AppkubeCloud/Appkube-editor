import { css } from '@emotion/css';
import React from 'react';

import { Field, StandardEditorProps } from '@grafana/data';
import { Button, useStyles2, Input } from '@grafana/ui';

import { ImgOption } from './types';

type Settings = { filter: (field: Field) => boolean };
type ImgOptionsEditorProps = StandardEditorProps<ImgOption[], Settings, undefined>;

export const ImgOptionsEditor = ({ value, onChange }: ImgOptionsEditorProps) => {
  const styles = useStyles2(getStyles);

  const addImg = () => {
    const newImg = { badgeTitle: '', badgeImage: '' };
    onChange(value ? [...value, newImg] : [newImg]);
  };

  const removeImg = (idx: number) => {
    const copy = value?.slice();
    copy.splice(idx, 1);
    onChange(copy);
  };

  const updateField = <K extends keyof ImgOption>(idx: number, field: K, newValue: any) => {
    let badges = value?.slice() ?? [];
    badges[idx][field] = newValue;
    onChange(badges);
  };

  return (
    <>
      {value?.map((img: any, i: any) => {
        return (
          <div className={styles.section} key={i}>
            <span>Name</span>
            <Input value={img.badgeTitle ?? ''} onChange={(e: any) => { updateField(i, 'badgeTitle', e.target.value); }} />
            <span>Image</span>
            <Input value={img.badgeImage ?? ''} onChange={(e: any) => { updateField(i, 'badgeImage', e.target.value); }} />
            <Button size="sm" icon="minus" variant="secondary" onClick={() => removeImg(i)} title="Remove Image" />
          </div>
        );
      })}
      <Button size={'sm'} icon="plus" onClick={addImg} variant="secondary">
        Add Box
      </Button>
    </>
  );
};

const getStyles = () => {
  return {
    section: css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0 8px;
      margin-bottom: 8px;
    `,
  };
};
