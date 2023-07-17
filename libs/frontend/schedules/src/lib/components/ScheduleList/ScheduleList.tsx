import { useState } from 'react';
import { ListBox, Selection } from 'react-aria-components';

import { Schedule } from '../../types';
import { ScheduleCard } from '../ScheduleCard';

type ScheduleListProps = {
  scheduleList: Schedule[];
  onShowLogs: (schedule: Schedule) => void;
  onRetire: (schedule: Schedule, isRetired: boolean) => void;
};

export function ScheduleList(props: ScheduleListProps): React.ReactElement {
  const { scheduleList, onRetire, onShowLogs } = props;

  const [selection, setSelection] = useState<Selection>();

  const hasNoScheduleList = scheduleList.length === 0;

  if (hasNoScheduleList) {
    return <div>No schedules found</div>;
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
      onShowLogs(schedule);
    }
  };

  return (
    <ListBox
      label="schedule list"
      selectionMode="single"
      items={scheduleList}
      onSelectionChange={updateSelectedSchedule}
      className="space-y-2"
    >
      {(schedule) => (
        <ScheduleCard key={schedule.id} onRetire={onRetire} schedule={schedule} />
      )}
    </ListBox>
  );
}
