import { PanelPlugin } from '@grafana/data';

import AppkubeEndUsagePanel from './AppkubeEndUsagePanel';

export const plugin = new PanelPlugin(AppkubeEndUsagePanel);
