import { PanelPlugin } from '@grafana/data';

import AppkubeTopBucketCompliancePanel from './AppkubeTopBucketCompliancePanel';

export const plugin = new PanelPlugin(AppkubeTopBucketCompliancePanel);
