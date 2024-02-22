import { PanelPlugin } from '@grafana/data';
import AppkubeUsedFunctionTablePanel from './AppkubeUsedFunctionTablePanel';

export const plugin = new PanelPlugin(AppkubeUsedFunctionTablePanel);
