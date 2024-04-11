import { PanelPlugin } from '@grafana/data';

import AppkubeBarChartPanel from './AppkubeBarChartPanel';

export const plugin = new PanelPlugin(AppkubeBarChartPanel).setPanelOptions((builder) => {
  builder.addTextInput({
    path: 'panelTitle',
    name: 'Panle Title',
    defaultValue: 'Title',
    settings: {
      placeholder: 'Title',
    },
  });
});
