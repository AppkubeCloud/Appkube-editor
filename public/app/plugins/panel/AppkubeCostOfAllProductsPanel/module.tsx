import { PanelPlugin } from '@grafana/data';
import AppkubeCostOfAllProductsPanel from './AppkubeCostOfAllProductsPanel';

export const plugin = new PanelPlugin(AppkubeCostOfAllProductsPanel);
