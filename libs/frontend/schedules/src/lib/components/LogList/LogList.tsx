import { ListBox } from 'react-aria-components';

import { Log } from '../../types';
import { LogCard } from '../LogCard';

type Props = {
  logList: Log[];
};

export function LogList(props: Props): React.ReactElement {
  const { logList } = props;

  const hasLogs = logList.length > 0;

  if (!hasLogs) {
    return (
      <div>
        <p>No logs found</p>
      </div>
    );
  }

  return (
    <ListBox
      label="log list"
      selectionMode="single"
      items={logList}
      className="flex flex-col flex-wrap gap-2 md:flex-row"
    >
      {(log) => <LogCard key={log.id} log={log} />}
    </ListBox>
  );
}
