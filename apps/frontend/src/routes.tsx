import { Route } from 'react-router-dom';

import App from './app/App';
import { Schedules } from '@schedules/frontend/schedules';

export const routes = (
  <Route element={<App />}>
    <Route path="*" element={<Schedules />} />
  </Route>
);
