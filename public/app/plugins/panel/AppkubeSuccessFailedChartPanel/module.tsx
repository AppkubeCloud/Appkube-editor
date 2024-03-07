import { PanelPlugin } from '@grafana/data';

import AppkubeSuccessFailedChartPanel from './AppkubeSuccessFailedChartPanel';

export const plugin = new PanelPlugin(AppkubeSuccessFailedChartPanel);
