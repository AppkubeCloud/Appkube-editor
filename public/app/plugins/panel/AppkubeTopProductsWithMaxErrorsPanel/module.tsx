import { PanelPlugin } from '@grafana/data';
import AppkubeTopProductsWithMaxErrorsPanel from './AppkubeTopProductsWithMaxErrorsPanel';

export const plugin = new PanelPlugin(AppkubeTopProductsWithMaxErrorsPanel);
