import { PanelPlugin } from '@grafana/data';

import AppkubeClusterCapacityPanel from './AppkubeClusterCapacityPanel';

export const plugin = new PanelPlugin(AppkubeClusterCapacityPanel);
