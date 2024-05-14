import { PanelPlugin } from '@grafana/data';

import AppkubeTabsChartPanel from './AppkubeTabsChartPanel';

export const plugin = new PanelPlugin(AppkubeTabsChartPanel);
