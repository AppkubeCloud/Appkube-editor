import { PanelPlugin } from '@grafana/data';

import AppkubeErrorAndWarningPanel from './AppkubeErrorAndWarningPanel';

export const plugin = new PanelPlugin(AppkubeErrorAndWarningPanel);
