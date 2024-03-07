import { PanelPlugin } from '@grafana/data';

import AppkubeMultilineChartPanel from './AppkubeMultilineChartPanel';

export const plugin = new PanelPlugin(AppkubeMultilineChartPanel);
