import { PanelPlugin } from '@grafana/data';

import AppkubeInstanceStatusPanel from './AppkubeInstancePanel';

export const plugin = new PanelPlugin(AppkubeInstanceStatusPanel);
