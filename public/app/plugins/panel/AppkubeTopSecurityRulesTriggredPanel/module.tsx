import { PanelPlugin } from '@grafana/data';
import AppkubeTopSecurityRulesTriggredPanel from './AppkubeTopSecurityRulesTriggredPanel';

export const plugin = new PanelPlugin(AppkubeTopSecurityRulesTriggredPanel);
