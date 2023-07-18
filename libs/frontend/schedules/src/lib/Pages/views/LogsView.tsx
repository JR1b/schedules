import { Badge, Spinner, ViewCard } from '@schedules/ui';

import { LogList } from '../../components';
import { LogContextProvider, useLogContext, useScheduleContext } from '../../contexts';

function EmptyLogsView(): React.ReactElement {
  return (
    <ViewCard>
      <ViewCard.Header>
        <h1 className="text-2xl font-bold">Logs</h1>
      </ViewCard.Header>
      <ViewCard.Body>
        <p>Select a schedule to view logs</p>
      </ViewCard.Body>
    </ViewCard>
  );
}

function SelectedScheduleLogsView(): React.ReactElement {
  const logContext = useLogContext();
  const { logList, isLoadingLogs } = logContext;

  return (
    <ViewCard>
      <ViewCard.Header>
        <h1 className="text-2xl font-bold">Logs</h1>
        <Badge>{logList.length}</Badge>
        <Spinner isLoading={isLoadingLogs} />
      </ViewCard.Header>
      <ViewCard.Body>
        <div>
          <LogList logList={logList} />
        </div>
      </ViewCard.Body>
    </ViewCard>
  );
}

export function LogsView(): React.ReactElement {
  const scheduleContext = useScheduleContext();
  const { selectedSchedule } = scheduleContext;

  if (!selectedSchedule) {
    return <EmptyLogsView />;
  }

  return (
    <LogContextProvider schedule={selectedSchedule}>
      <SelectedScheduleLogsView />
    </LogContextProvider>
  );
}
