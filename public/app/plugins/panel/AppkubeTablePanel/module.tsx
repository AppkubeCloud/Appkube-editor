import { PanelPlugin } from '@grafana/data';
 
import AppkubeTablePanel from './AppkubeTablePanel';

export const plugin = new PanelPlugin(AppkubeTablePanel).setPanelOptions((builder) => {
    builder.addTextInput({
      path: 'tableTitle',
      name: 'Table Title',
      defaultValue: 'title table',
      settings: {
        placeholder: 'Table Title',
      },
    });
    builder.addTextInput({
        path: 'tableDescription',
        name: 'Table Description',
        defaultValue: 'description ',
        settings: {
          placeholder: 'Table Description',
        },
      });
  
  });

