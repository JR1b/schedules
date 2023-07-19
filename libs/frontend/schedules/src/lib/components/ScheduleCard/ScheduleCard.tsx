import { Button, Item } from 'react-aria-components';
import { FiX } from 'react-icons/fi';
import { ItemProps } from 'react-stately';

import classnames from 'classnames';

import { Schedule } from '../../types';
import { formatDate } from '../../utils';
import { RetireButton } from './RetireButton';

type Props = {
  schedule: Schedule;
  onRetire: (schedule: Schedule, isRetires: boolean) => void;
} & Omit<ItemProps<Schedule>, 'children'>;

export function ScheduleCard(props: Props): React.ReactElement {
  const { schedule, onRetire, ...itemProps } = props;

  return (
    <Item {...itemProps} id={schedule.id} textValue={schedule.name}>
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
            <h3 className="h-1/4 truncate text-base font-medium">{schedule.name}</h3>
            <div className="flex h-3/4 flex-col justify-between">
              <p className="line-clamp-3 overflow-hidden text-ellipsis text-justify">
                {schedule.description}
              </p>
              <p className="flex justify-between text-xs">
                <span>Start: {formatDate(schedule.startDate)}</span>
                <span>End: {formatDate(schedule.endDate)}</span>
              </p>
            </div>
          </div>
          <div className="flex w-1/5 flex-col items-end justify-between text-sm font-medium">
            <Button
              onPress={() => alert(`This would delete the schedule '${schedule.name}'`)}
              className="rounded-full border p-0.5 transition-all hover:scale-105 hover:bg-slate-800"
            >
              <FiX className="h-4 w-4" />
            </Button>
            <RetireButton onRetire={onRetire} schedule={schedule} />
          </div>
        </div>
      )}
    </Item>
  );
}
