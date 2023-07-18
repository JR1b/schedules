import { Badge, ViewCard } from '@schedules/ui';

import { ScheduleList } from '../../components';
import { useScheduleContext } from '../../contexts';

export function SchedulesView(): React.ReactElement {
  const scheduleContext = useScheduleContext();
  const { scheduleList } = scheduleContext;

  return (
    <ViewCard>
      <ViewCard.Header>
        <h1 className="text-2xl font-bold">Schedules</h1>
        <Badge>{scheduleList.length}</Badge>
      </ViewCard.Header>
      <ViewCard.Body>
        <ScheduleList {...scheduleContext} />
      </ViewCard.Body>
    </ViewCard>
  );
}
