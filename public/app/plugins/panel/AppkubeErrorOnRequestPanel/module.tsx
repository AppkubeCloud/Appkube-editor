import { PanelPlugin } from '@grafana/data';

import AppkubeErrorOnRequestPanel from './AppkubeErrorOnRequestPanel';

export const plugin = new PanelPlugin(AppkubeErrorOnRequestPanel);
