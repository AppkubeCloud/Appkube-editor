import { PanelPlugin } from '@grafana/data';
import AppkubeResponseTimePanel from './AppkubeResponseTimePanel';

export const plugin = new PanelPlugin(AppkubeResponseTimePanel);
