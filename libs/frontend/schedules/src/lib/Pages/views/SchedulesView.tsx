import { Badge, View } from '@adobe/react-spectrum';

import { ScheduleList } from '../../components';
import { useScheduleContext } from '../../contexts';

export function SchedulesView(): React.ReactElement {
  const scheduleContext = useScheduleContext();

  return (
    <div className="p-4">
      <div className="flex items-center justify-between py-2 text-lg font-medium">
        <h2>Schedules</h2>
        <Badge variant="info">{scheduleContext.total}</Badge>
      </div>
      <div className="h-96 overflow-auto">
        <ScheduleList {...scheduleContext} />
      </div>
    </div>
  );
}
