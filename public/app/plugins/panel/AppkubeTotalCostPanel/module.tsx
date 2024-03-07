import { PanelPlugin } from '@grafana/data';

import AppkubeTotalCostPanel from './AppkubeTotalCostPanel';

export const plugin = new PanelPlugin(AppkubeTotalCostPanel);
