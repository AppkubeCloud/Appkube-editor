import { PanelPlugin } from '@grafana/data';
import AppkubeExecutionTimePanel from './AppkubeExecutionTimePanel';

export const plugin = new PanelPlugin(AppkubeExecutionTimePanel);
