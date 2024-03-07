import { PanelPlugin } from '@grafana/data';

import AppkubeSuccessAndFailedRequestPanel from './AppkubeSuccessAndFailedRequestPanel';

export const plugin = new PanelPlugin(AppkubeSuccessAndFailedRequestPanel);
