import { PanelPlugin } from '@grafana/data';

import NodeFailurePanel from './NodeFailurePanel';

export const plugin = new PanelPlugin(NodeFailurePanel).setPanelOptions((builder) => {
  builder.addTextInput({
    path: 'title',
    name: 'Title',
    defaultValue: 'Node Failure Panel',
    settings: {
      placeholder: 'Node Failure Panel',
    },
  })
});
