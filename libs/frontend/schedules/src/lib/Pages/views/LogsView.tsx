import { Badge, ViewCard } from '@schedules/ui';

import { LogList } from '../../components';
import { useScheduleContext } from '../../contexts';

export function LogsView(): React.ReactElement {
  const scheduleContext = useScheduleContext();
  const { selectedScheduleLogList } = scheduleContext;

  return (
    <ViewCard>
      <ViewCard.Header>
        <h1 className="text-2xl font-bold">Logs</h1>
        <Badge>{selectedScheduleLogList.length}</Badge>
      </ViewCard.Header>
      <ViewCard.Body>
        <LogList logList={selectedScheduleLogList} />
      </ViewCard.Body>
    </ViewCard>
  );
}
