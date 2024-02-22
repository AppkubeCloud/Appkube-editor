import { PanelPlugin } from '@grafana/data';
import AppkubeTablePanel from './AppkubeTablePanel';

export const plugin = new PanelPlugin(AppkubeTablePanel);
