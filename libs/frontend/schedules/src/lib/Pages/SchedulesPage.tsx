import { Page } from '@schedules/ui';

import { ScheduleContextProvider } from '../contexts';
import { LogsView, SchedulesView } from './views';

export function SchedulesPage(): React.ReactElement {
  return (
    <ScheduleContextProvider>
      <Page title="Schedules">
        <div className="flex h-full flex-col gap-2 md:mx-2 md:flex-row">
          <div className="bg-slate-950 md:h-full md:w-96  md:rounded-md">
            <SchedulesView />
          </div>
          <div className="h-full w-full bg-slate-950">
            <LogsView />
          </div>
        </div>
      </Page>
    </ScheduleContextProvider>
  );
}
