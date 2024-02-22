import { PanelPlugin } from '@grafana/data';
import AppkubeSecurityPanel from './AppkubeSecurityPanel';

export const plugin = new PanelPlugin(AppkubeSecurityPanel);
