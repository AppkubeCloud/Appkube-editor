import { PanelPlugin } from '@grafana/data';
import AppkubeApiServersTablePanel from './AppkubeApiServersTablePanel';

export const plugin = new PanelPlugin(AppkubeApiServersTablePanel);
