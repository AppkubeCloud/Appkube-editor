import { PanelPlugin } from '@grafana/data';

import AppkubeFlowCountPanel from './AppkubeFlowCountPanel';

export const plugin = new PanelPlugin(AppkubeFlowCountPanel);
