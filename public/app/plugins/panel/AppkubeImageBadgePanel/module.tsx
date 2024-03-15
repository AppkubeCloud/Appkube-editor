import { PanelPlugin } from '@grafana/data';

import AppkubeImageBadgePanel from './AppkubeImageBadgePanel';
import { ImgOptionsEditor } from './ImgOptionsEditor';

export const plugin = new PanelPlugin(AppkubeImageBadgePanel).setPanelOptions((builder) => {
  builder
    .addCustomEditor({
      name: 'Edit Badges Box',
      path: 'editBadgeBox',
      id: 'editBadgeBox',
      editor: ImgOptionsEditor,
    });
});

