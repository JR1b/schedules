import { Page } from '@schedules/ui';

import { ScheduleContextProvider } from '../contexts';
import { LogsView, SchedulesView } from './views';

export function SchedulesPage(): React.ReactElement {
  return (
    <ScheduleContextProvider>
      <Page>
        <Page.TitleBar title="Schedules" />
        <Page.Body>
          <div className="flex flex-col gap-2 md:flex-row">
            <div className="bg-slate-950 md:w-min md:min-w-fit md:max-w-min md:grow md:rounded-md">
              <SchedulesView />
            </div>
            <div className="grow bg-slate-950 md:rounded-md">
              <LogsView />
            </div>
          </div>
        </Page.Body>
      </Page>
    </ScheduleContextProvider>
  );
}
