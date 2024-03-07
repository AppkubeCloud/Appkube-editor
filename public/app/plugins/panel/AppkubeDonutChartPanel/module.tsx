import { PanelPlugin } from '@grafana/data';

import AppkubeDonutChartPanel from './AppkubeDonutChartPanel';

export const plugin = new PanelPlugin(AppkubeDonutChartPanel);
