import { PanelPlugin } from '@grafana/data';

import AppkubeUtilizationPanel from './AppkubeUtilizationPanel';

export const plugin = new PanelPlugin(AppkubeUtilizationPanel);
