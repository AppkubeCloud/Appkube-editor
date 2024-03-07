import { PanelPlugin } from '@grafana/data';

import AppkubeCompliancePanel from './AppkubeCompliancePanel';

export const plugin = new PanelPlugin(AppkubeCompliancePanel);
