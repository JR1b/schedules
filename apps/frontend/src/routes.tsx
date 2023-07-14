import { Route } from 'react-router-dom';

import { App } from './app/App';
import { SchedulesPage } from '@schedules/frontend/schedules';
import { AppLayout } from '@schedules/ui';

export const routes = (
  <Route element={<App />}>
    <Route element={<AppLayout />}>
      <Route path="*" element={<SchedulesPage />} />
    </Route>
  </Route>
);
