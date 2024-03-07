import { PanelPlugin } from '@grafana/data';

import AppkubeWiseCostPanel from './AppkubeWiseCostPanel';

export const plugin = new PanelPlugin(AppkubeWiseCostPanel);
