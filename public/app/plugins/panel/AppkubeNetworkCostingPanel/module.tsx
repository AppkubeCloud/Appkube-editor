import { PanelPlugin } from '@grafana/data';

import AppkubeNetworkCostingPanel from './AppkubeNetworkCostingPanel';

export const plugin = new PanelPlugin(AppkubeNetworkCostingPanel);
