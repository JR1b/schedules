import { Route } from 'react-router-dom';

import { SchedulesPage } from '@schedules/frontend/schedules';

import { App } from './app/App';

export const routes = (
  <Route element={<App />}>
    <Route path="*" element={<SchedulesPage />} />
  </Route>
);
