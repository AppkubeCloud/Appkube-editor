import { PanelPlugin } from '@grafana/data';
import AppkubeClusterHealthPanel from './AppkubeClusterHealthPanel';

export const plugin = new PanelPlugin(AppkubeClusterHealthPanel);
