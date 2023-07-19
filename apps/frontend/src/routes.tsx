import { Navigate, Route } from 'react-router-dom';

import { SchedulesRoutes } from '@schedules/frontend/schedules';

import { App } from './app/App';

export const routes = (
  <Route element={<App />}>
    <Route path="/" element={<Navigate to="/schedules" />} />
    <Route path="/schedules/*" element={<SchedulesRoutes />} />
  </Route>
);
