import { PanelPlugin } from '@grafana/data';
import AppkubeMessagesTablePanel from './AppkubeMessagesTablePanel';

export const plugin = new PanelPlugin(AppkubeMessagesTablePanel);
