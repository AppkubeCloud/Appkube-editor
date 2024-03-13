import { PanelPlugin } from '@grafana/data';

import AppkubeTablePanel from './AppkubeTablePanel';

export const plugin = new PanelPlugin(AppkubeTablePanel).setPanelOptions((builder) => {
  builder.addTextInput({
    path: 'panelTitle',
    name: 'Panle Title',
    defaultValue: 'Alerts and Notifications',
    settings: {
      placeholder: 'Panel Title',
    },
  });
  builder.addTextInput({
    path: 'panelDescription',
    name: 'Panel Description',
    defaultValue: 'A list of recent alerts and notifications related to the instance&apos;s availability',
    settings: {
      placeholder: 'Panel Description',
    },
  });

});

