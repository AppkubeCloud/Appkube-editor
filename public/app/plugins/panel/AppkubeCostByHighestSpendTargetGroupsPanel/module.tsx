import { PanelPlugin } from '@grafana/data';
import AppkubeCostByHighestSpendTargetGroupsPanel from './AppkubeCostByHighestSpendTargetGroupsPanel';

export const plugin = new PanelPlugin(AppkubeCostByHighestSpendTargetGroupsPanel);
