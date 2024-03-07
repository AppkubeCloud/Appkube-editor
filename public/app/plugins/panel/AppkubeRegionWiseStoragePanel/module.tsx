import { PanelPlugin } from '@grafana/data';

import AppkubeRegionWiseStoragePanel from './AppkubeRegionWiseStoragePanel';

export const plugin = new PanelPlugin(AppkubeRegionWiseStoragePanel);
