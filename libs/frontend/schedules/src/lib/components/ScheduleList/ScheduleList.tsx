import { ListBox, Selection } from 'react-aria-components';

import { Schedule } from '../../types';
import { ScheduleCard } from '../ScheduleCard';

type ScheduleListProps = {
  scheduleList: Schedule[];
  selectedSchedule: Schedule | null;
  setSelectedSchedule: (schedule: Schedule | null) => void;
};

export function ScheduleList(props: ScheduleListProps): React.ReactElement {
  const { scheduleList, selectedSchedule, setSelectedSchedule } = props;

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
      setSelectedSchedule(schedule);
    }
  };

  return (
    <ListBox
      label="schedule list"
      selectionMode="single"
      items={scheduleList}
      onSelectionChange={updateSelectedSchedule}
    >
      {(schedule) => <ScheduleCard key={schedule.id} schedule={schedule} />}
    </ListBox>
  );
}
