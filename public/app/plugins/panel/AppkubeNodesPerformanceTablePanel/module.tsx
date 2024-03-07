import { PanelPlugin } from '@grafana/data';

import AppkubeNodesPerformanceTablePanel from './AppkubeNodesPerformanceTablePanel';

export const plugin = new PanelPlugin(AppkubeNodesPerformanceTablePanel);
