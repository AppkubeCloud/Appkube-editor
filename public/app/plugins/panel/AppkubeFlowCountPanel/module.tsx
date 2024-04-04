import { PanelPlugin } from '@grafana/data';

import AppkubeFlowCountPanel from './AppkubeFlowCountPanel';

export const plugin = new PanelPlugin(AppkubeFlowCountPanel).setPanelOptions((builder) => {
  builder.addTextInput({
    path: 'title',
    name: 'Title',
    defaultValue: 'Title',
    settings: {
      placeholder: 'Title',
    },
  })
});

