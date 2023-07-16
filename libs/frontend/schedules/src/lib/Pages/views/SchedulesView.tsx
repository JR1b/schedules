import { ScheduleList } from '../../components';
import { useScheduleContext } from '../../contexts';

export function SchedulesView(): React.ReactElement {
  const scheduleContext = useScheduleContext();

  return (
    <div className="p-4">
      <div className="flex items-center justify-between py-2 font-medium">
        <h2 className="text-lg">Schedules</h2>
        <span className="rounded-md bg-blue-600 py-0.5 px-1.5">
          {scheduleContext.total}
        </span>
      </div>
      <div className="h-96 overflow-auto">
        <ScheduleList {...scheduleContext} />
      </div>
    </div>
  );
}
