import { PanelPlugin } from '@grafana/data';

import AppkubeFunctionByRegionPanel from './AppkubeFunctionByRegionPanel';

export const plugin = new PanelPlugin(AppkubeFunctionByRegionPanel).setPanelOptions((builder) => {
  builder.addTextInput({
    path: 'panelTitle',
    name: 'Panle Title',
    defaultValue: 'Function By Region',
    settings: {
      placeholder: 'Function By Region',
    },
  });
});
