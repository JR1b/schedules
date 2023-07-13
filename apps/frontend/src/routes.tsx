import { Route } from 'react-router-dom';

import { App } from './app/App';
import { Schedules } from '@schedules/frontend/schedules';
import { AppLayout } from '@schedules/ui';

export const routes = (
  <Route element={<App />}>
    <Route element={<AppLayout />}>
      <Route path="*" element={<Schedules />} />
    </Route>
  </Route>
);
