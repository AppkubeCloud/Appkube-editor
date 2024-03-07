import { PanelPlugin } from '@grafana/data';

import AppkubeTopFailureFunctionsPanel from './AppkubeTopFailureFunctionsPanel';

export const plugin = new PanelPlugin(AppkubeTopFailureFunctionsPanel);
