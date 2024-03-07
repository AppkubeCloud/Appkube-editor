import { PanelPlugin } from '@grafana/data';

import AppkubeOverallBucketCompliancePanel from './AppkubeOverallBucketCompliancePanel';

export const plugin = new PanelPlugin(AppkubeOverallBucketCompliancePanel);
