import { ToggleButton } from 'react-aria-components';

import classnames from 'classnames';

import { Schedule } from '../../types';

type Props = {
  schedule: Schedule;
  onRetire: (schedule: Schedule, isRetired: boolean) => void;
};

export function RetireButton(props: Props): React.ReactElement {
  const { schedule, onRetire } = props;
  return (
    <ToggleButton
      isSelected={schedule.isRetired}
      onChange={(isSelected) => onRetire(schedule, isSelected)}
    >
      {({ isSelected }) => (
        <div
          className={classnames('w-14 rounded-md border px-1 py-0.5 transition-all', {
            'bg-slate-700 hover:bg-slate-800': isSelected,
            'bg-blue-600 hover:bg-blue-700': !isSelected,
          })}
        >
          {isSelected ? 'Retired' : 'Retire'}
        </div>
      )}
    </ToggleButton>
  );
}
