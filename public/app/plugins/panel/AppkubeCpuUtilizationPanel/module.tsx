import { PanelPlugin } from '@grafana/data';

import AppkubeCpuUtilizationPanel from './AppkubeCpuUtilizationPanel';

export const plugin = new PanelPlugin(AppkubeCpuUtilizationPanel);
