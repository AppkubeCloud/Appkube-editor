import { PanelPlugin } from '@grafana/data';
import AppkubeEksResourcesPanel from './AppkubeEksResourcesPanel';

export const plugin = new PanelPlugin(AppkubeEksResourcesPanel);
