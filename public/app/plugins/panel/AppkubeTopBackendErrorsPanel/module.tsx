import { PanelPlugin } from '@grafana/data';
import AppkubeTopBackendErrorsPanel from './AppkubeTopBackendErrorsPanel';

export const plugin = new PanelPlugin(AppkubeTopBackendErrorsPanel);
