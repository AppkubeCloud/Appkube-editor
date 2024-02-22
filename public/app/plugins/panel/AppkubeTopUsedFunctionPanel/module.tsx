import { PanelPlugin } from '@grafana/data';
import AppkubeTopUsedFunctionPanel from './AppkubeTopUsedFunctionPanel';

export const plugin = new PanelPlugin(AppkubeTopUsedFunctionPanel);
