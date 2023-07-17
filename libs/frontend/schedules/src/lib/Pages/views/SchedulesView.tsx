import { ScheduleList } from '../../components';
import { useScheduleContext } from '../../contexts';

export function SchedulesView(): React.ReactElement {
  const scheduleContext = useScheduleContext();

  return (
    <div className="h-full p-2">
      <div className="flex items-center justify-between p-2 font-medium">
        <h2 className="text-lg">Schedules</h2>
        <span className="rounded-md bg-blue-600 px-1.5 py-0.5">
          {scheduleContext.total}
        </span>
      </div>
      <div className="h-[85vh] overflow-auto px-2">
        <ScheduleList {...scheduleContext} />
      </div>
    </div>
  );
}
