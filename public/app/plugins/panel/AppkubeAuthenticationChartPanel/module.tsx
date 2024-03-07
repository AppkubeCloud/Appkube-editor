import { PanelPlugin } from '@grafana/data';

import AppkubeAuthenticationChartPanel from './AppkubeAuthenticationChartPanel';

export const plugin = new PanelPlugin(AppkubeAuthenticationChartPanel);
