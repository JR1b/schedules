import { ListBox, Selection } from 'react-aria-components';

import { Schedule } from '../../types';
import { ScheduleCard } from '../ScheduleCard';

type Props = {
  scheduleList: Schedule[];
  onSelectSchedule: (schedule: Schedule) => void;
  onRetire: (schedule: Schedule, isRetired: boolean) => void;
};

export function ScheduleList(props: Props): React.ReactElement {
  const { scheduleList, onRetire, onSelectSchedule } = props;

  const hasSchedules = scheduleList.length > 0;

  if (!hasSchedules) {
    return (
      <div>
        <p>No schedules found</p>
      </div>
    );
  }

  const updateSelectedSchedule = (selection: Selection) => {
    const hasSelectionCurrentKey =
      !(typeof selection === 'object') ||
      selection == null ||
      !('currentKey' in selection);

    if (hasSelectionCurrentKey) {
      return;
    }

    const schedule = scheduleList.find(
      (schedule) => schedule.id === selection.currentKey
    );

    const hasFoundSchedule = schedule != null;

    if (hasFoundSchedule) {
      onSelectSchedule(schedule);
    }
  };

  return (
    <ListBox
      label="schedule list"
      selectionMode="single"
      items={scheduleList}
      onSelectionChange={updateSelectedSchedule}
      className="space-y-2 py-2"
    >
      {(schedule) => (
        <ScheduleCard key={schedule.id} onRetire={onRetire} schedule={schedule} />
      )}
    </ListBox>
  );
}
