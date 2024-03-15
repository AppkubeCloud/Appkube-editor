import { PanelPlugin } from '@grafana/data';

import AppkubePodsOverviewPanel from './AppkubePodsOverviewPanel';

export const plugin = new PanelPlugin(AppkubePodsOverviewPanel).setPanelOptions((builder) => {
  builder.addTextInput({
    path: 'overviewTitle',
    name: 'Overview Title',
    defaultValue: 'Pods Overview',
    settings: {
      placeholder: 'Pods Overview',
    },
  })
});
