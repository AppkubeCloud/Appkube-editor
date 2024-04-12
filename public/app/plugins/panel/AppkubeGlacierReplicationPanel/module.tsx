import { PanelPlugin } from '@grafana/data';

import AppkubeGlacierReplicationPanel from './AppkubeGlacierReplicationPanel';

export const plugin = new PanelPlugin(AppkubeGlacierReplicationPanel);
