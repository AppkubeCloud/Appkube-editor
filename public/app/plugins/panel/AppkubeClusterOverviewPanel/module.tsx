import { PanelPlugin } from '@grafana/data';

import AppkubeClusterOverviewPanel from './AppkubeClusterOverviewPanel';

export const plugin = new PanelPlugin(AppkubeClusterOverviewPanel).setPanelOptions((builder) => {
  builder.addTextInput({
    path: 'title',
    name: 'Title',
    defaultValue: 'Title',
    settings: {
      placeholder: 'Title',
    },
  })
});
