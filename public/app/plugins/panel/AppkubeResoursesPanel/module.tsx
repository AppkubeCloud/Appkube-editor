import { PanelPlugin } from '@grafana/data';

import AppkubeResoursesPanel from './AppkubeResoursesPanel';

export const plugin = new PanelPlugin(AppkubeResoursesPanel);
