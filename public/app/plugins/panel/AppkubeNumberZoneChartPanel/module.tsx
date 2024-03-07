import { PanelPlugin } from '@grafana/data';

import AppkubeNumberZoneChartPanel from './AppkubeNumberZoneChartPanel';

export const plugin = new PanelPlugin(AppkubeNumberZoneChartPanel);
