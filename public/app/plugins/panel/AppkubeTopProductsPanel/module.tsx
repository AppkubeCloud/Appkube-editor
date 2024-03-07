import { PanelPlugin } from '@grafana/data';

import AppkubeTopProductsPanel from './AppkubeTopProductsPanel';

export const plugin = new PanelPlugin(AppkubeTopProductsPanel);
