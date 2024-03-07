import { PanelPlugin } from '@grafana/data';

import AppkubeBreakdownPanel from './AppkubeBreakdownPanel';

export const plugin = new PanelPlugin(AppkubeBreakdownPanel);
