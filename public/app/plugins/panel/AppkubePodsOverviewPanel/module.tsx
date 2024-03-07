import { PanelPlugin } from '@grafana/data';

import AppkubePodsOverviewPanel from './AppkubePodsOverviewPanel';

export const plugin = new PanelPlugin(AppkubePodsOverviewPanel);
