import { PanelPlugin } from '@grafana/data';
import AppkubePerfomancePanel from './AppkubePerfomancePanel';

export const plugin = new PanelPlugin(AppkubePerfomancePanel);
