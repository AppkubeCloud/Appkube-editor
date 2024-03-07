import { PanelPlugin } from '@grafana/data';

import AppkubeTopResourcesRequestCountPanel from './AppkubeTopResourcesRequestCountPanel';

export const plugin = new PanelPlugin(AppkubeTopResourcesRequestCountPanel);
