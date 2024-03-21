import { PanelPlugin } from '@grafana/data';

import AppkubeInstanceStatusPanel from './AppkubeInstancePanel';

export const plugin = new PanelPlugin(AppkubeInstanceStatusPanel).setPanelOptions((builder) => {
  builder.addTextInput({
    path: 'instanceTitle',
    name: 'Title',
    defaultValue: 'Appkube Instance Status Panel',
    settings: {
      placeholder: 'Appkube Instance Status Panel',
    },
  });
  builder.addTextInput({
    path: 'instanceDescription',
    name: 'Description',
    defaultValue: 'Description',
    settings: {
      placeholder: 'Description',
    },
  })
});
