import { ListBox } from 'react-aria-components';

import { Log } from '../../types';
import { LogCard } from '../LogCard';

type Props = {
  logList: Log[];
};

export function LogList(props: Props): React.ReactElement {
  const { logList } = props;

  const hasNoScheduleList = LogList.length === 0;

  if (hasNoScheduleList) {
    return <div>No logs found</div>;
  }

  return (
    <ListBox
      label="log list"
      selectionMode="single"
      items={logList}
      className="space-y-2"
    >
      {(log) => <LogCard key={log.id} log={log} />}
    </ListBox>
  );
}
