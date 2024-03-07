import { PanelPlugin } from '@grafana/data';

import AppkubeFunctionByProductsPanel from './AppkubeFunctionByProductsPanel';

export const plugin = new PanelPlugin(AppkubeFunctionByProductsPanel);
