import { PanelPlugin } from '@grafana/data';

import AppkubeLCUPanel from './AppkubeLCUPanel';

export const plugin = new PanelPlugin(AppkubeLCUPanel);
