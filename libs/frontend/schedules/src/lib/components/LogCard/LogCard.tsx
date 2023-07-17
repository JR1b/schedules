import { Item } from 'react-aria-components';
import { ItemProps } from 'react-stately';

import classnames from 'classnames';

import { Log } from '../../types';
import { formatDate } from '../../utils';

type Props = {
  log: Log;
} & Omit<ItemProps<Log>, 'children'>;

export function LogCard(props: Props): React.ReactElement {
  const { log, ...itemProps } = props;

  return (
    <Item {...itemProps} id={log.id} textValue={log.serverName}>
      {({ isSelected }) => (
        <div
          className={classnames(
            'flex h-32 min-h-full justify-between gap-2 overflow-auto rounded-md px-3 py-2 transition-all ',
            {
              'bg-blue-900 ring-4 ring-blue-600 hover:bg-blue-800': isSelected,
              'bg-slate-800 hover:bg-slate-700': !isSelected,
            }
          )}
        >
          <div className="flex w-4/5 flex-col gap-1">
            <h3 className="h-1/4 truncate text-base font-medium">{log.serverName}</h3>
            <div className="flex h-3/4 flex-col justify-between">
              <p className="line-clamp-3 overflow-hidden text-ellipsis text-justify">
                {log.status}
              </p>
              <p className="flex justify-between text-xs">
                <span>Start: {formatDate(log.startTime)}</span>
                <span>End: {formatDate(log.endTime)}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </Item>
  );
}
