import { LogList } from '../../components';
import { useScheduleContext } from '../../contexts';

export function LogsView(): React.ReactElement {
  const scheduleContext = useScheduleContext();
  const { selectedScheduleLogList } = scheduleContext;

  return (
    <div className="h-full p-2">
      <div className="flex items-center justify-between p-2 font-medium">
        <h2 className="text-lg">Logs</h2>
        <span className="rounded-md bg-blue-600 px-1.5 py-0.5">
          {selectedScheduleLogList.length}
        </span>
      </div>
      <div className="h-[85vh] overflow-auto px-2">
        <LogList logList={selectedScheduleLogList} />
      </div>
    </div>
  );
}
