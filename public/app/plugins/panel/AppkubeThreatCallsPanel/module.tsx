import { PanelPlugin } from '@grafana/data';
import AppkubeThreatCallsPanel from './AppkubeThreatCallsPanel';

export const plugin = new PanelPlugin(AppkubeThreatCallsPanel);
