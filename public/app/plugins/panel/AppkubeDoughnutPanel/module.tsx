import { PanelPlugin } from '@grafana/data';

import AppkubeDoughnutPanel from './AppkubeDoughnutPanel';

export const plugin = new PanelPlugin(AppkubeDoughnutPanel).setPanelOptions((builder) => {
  builder.addTextInput({
    path: 'panelTitle',
    name: 'Panle Title',
    defaultValue: 'Function By Region',
    settings: {
      placeholder: 'Function By Region',
    },
  });
});
