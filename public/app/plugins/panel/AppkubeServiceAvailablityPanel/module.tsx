import { PanelPlugin } from '@grafana/data';

import AppkubeServiceAvailablityPanel from './AppkubeServiceAvailablityPanel';

export const plugin = new PanelPlugin(AppkubeServiceAvailablityPanel).setPanelOptions((builder) => {
  builder.addTextInput({
    path: 'title',
    name: 'Title',
    defaultValue: 'Title',
    settings: {
      placeholder: 'Title',
    },
  })
});
