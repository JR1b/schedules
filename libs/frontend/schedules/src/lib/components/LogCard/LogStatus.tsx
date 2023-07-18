'Pending|Running|Terminated|Completed|Exception';

import { match } from 'ts-pattern';

import { Badge } from '@schedules/ui';

import { LogStatusEnum } from '../../schemas';
import { Log } from '../../types';

type Props = {
  status: Log['status'];
};

export function LogStatus(props: Props): React.ReactElement {
  const { status } = props;

  return match(status)
    .with(LogStatusEnum.Pending, () => <Badge variant="secondary">Pending</Badge>)
    .with(LogStatusEnum.Running, () => <Badge variant="primary">Running</Badge>)
    .with(LogStatusEnum.Completed, () => <Badge variant="success">Completed</Badge>)
    .with(LogStatusEnum.Terminated, () => <Badge variant="warning">Terminated</Badge>)
    .with(LogStatusEnum.Exception, () => <Badge variant="danger">Exception</Badge>)
    .otherwise(() => <Badge variant="warning">Unknown</Badge>);
}
