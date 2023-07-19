import { Badge, Spinner, ViewCard } from '@schedules/ui';

import { ScheduleList } from '../../components';
import { useScheduleContext } from '../../contexts';

export function SchedulesView(): React.ReactElement {
  const scheduleContext = useScheduleContext();
  const { scheduleList, isLoadingSchedules } = scheduleContext;

  return (
    <ViewCard>
      <ViewCard.Header>
        <h1 className="text-2xl font-bold">Schedules</h1>
        <Badge>{scheduleList.length}</Badge>
        <Spinner isLoading={isLoadingSchedules} />
      </ViewCard.Header>
      <ViewCard.Body>
        <ScheduleList {...scheduleContext} />
      </ViewCard.Body>
    </ViewCard>
  );
}
