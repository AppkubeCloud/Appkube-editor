import { PanelPlugin } from '@grafana/data';

import AppkubeReliabilityPanel from './AppkubeReliabilityPanel';

export const plugin = new PanelPlugin(AppkubeReliabilityPanel);
