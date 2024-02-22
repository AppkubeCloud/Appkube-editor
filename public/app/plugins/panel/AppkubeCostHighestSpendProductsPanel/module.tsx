import { PanelPlugin } from '@grafana/data';
import AppkubeCostHighestSpendProductsPanel from './AppkubeCostHighestSpendProductsPanel';

export const plugin = new PanelPlugin(AppkubeCostHighestSpendProductsPanel);
