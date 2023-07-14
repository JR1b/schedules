import { useScheduleContext } from '../../contexts';

export function SchedulesView(): React.ReactElement {
  const { scheduleList } = useScheduleContext();
  console.log(
    '🚀 ~ file: SchedulesView.tsx:5 ~ SchedulesView ~ scheduleList:',
    scheduleList
  );
  return (
    <div>
      <h2>Schedules</h2>
    </div>
  );
}
