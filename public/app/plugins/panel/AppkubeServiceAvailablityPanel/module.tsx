import { PanelPlugin } from '@grafana/data';

import AppkubeServiceAvailablityPanel from './AppkubeServiceAvailablityPanel';

export const plugin = new PanelPlugin(AppkubeServiceAvailablityPanel);
