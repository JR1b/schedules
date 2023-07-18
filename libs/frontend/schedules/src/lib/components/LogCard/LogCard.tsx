import { Item } from 'react-aria-components';
import { ItemProps } from 'react-stately';

import { Log } from '../../types';
import { formatDate } from '../../utils';
import { LogStatus } from '../LogStatus';

type Props = {
  log: Log;
} & Omit<ItemProps<Log>, 'children'>;

export function LogCard(props: Props): React.ReactElement {
  const { log, ...itemProps } = props;

  return (
    <Item {...itemProps} id={log.id} textValue={log.serverName}>
      <div className="flex h-32 min-h-full justify-between gap-2 overflow-auto rounded-md bg-slate-800 px-3 py-2 transition-all md:w-96">
        <div className="flex grow flex-col gap-1">
          <div className="h-1/4 font-medium">
            <LogStatus status={log.status} />
          </div>
          <div className="flex h-3/4 flex-col justify-between">
            <p className="line-clamp-3 overflow-hidden text-ellipsis text-justify">
              Server: <span>{log.serverName}</span>
            </p>
            <p className="flex justify-between text-xs">
              <span>Start: {formatDate(log.startTime)}</span>
              <span>End: {formatDate(log.endTime)}</span>
            </p>
          </div>
        </div>
      </div>
    </Item>
  );
}
