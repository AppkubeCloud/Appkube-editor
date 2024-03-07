import { PanelPlugin } from '@grafana/data';

import AppkubeDataLifecycleManagementPanel from './AppkubeDataLifecycleManagementPanel';

export const plugin = new PanelPlugin(AppkubeDataLifecycleManagementPanel);
