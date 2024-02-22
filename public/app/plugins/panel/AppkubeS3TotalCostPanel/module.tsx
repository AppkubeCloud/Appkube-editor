import { PanelPlugin } from '@grafana/data';
import AppkubeS3TotalCostPanel from './AppkubeS3TotalCostPanel';

export const plugin = new PanelPlugin(AppkubeS3TotalCostPanel);
