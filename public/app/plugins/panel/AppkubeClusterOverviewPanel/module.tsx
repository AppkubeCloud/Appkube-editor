import { PanelPlugin } from '@grafana/data';

import AppkubeClusterOverviewPanel from './AppkubeClusterOverviewPanel';

export const plugin = new PanelPlugin(AppkubeClusterOverviewPanel);
