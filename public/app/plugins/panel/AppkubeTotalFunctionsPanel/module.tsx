import { PanelPlugin } from '@grafana/data';

import AppkubeTotalFunctionsPanel from './AppkubeTotalFunctionsPanel';

export const plugin = new PanelPlugin(AppkubeTotalFunctionsPanel);
