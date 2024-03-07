import { PanelPlugin } from '@grafana/data';

import AppkubeClusterEventsTabelPanel from './AppkubeClusterEventsTabelPanel';

export const plugin = new PanelPlugin(AppkubeClusterEventsTabelPanel);
