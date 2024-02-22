import { PanelPlugin } from '@grafana/data';
import AppkubeKubernetesCostPanel from './AppkubeKubernetesCostPanel';

export const plugin = new PanelPlugin(AppkubeKubernetesCostPanel);
