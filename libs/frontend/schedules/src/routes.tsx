import { Route, Routes } from 'react-router-dom';

import { SchedulesPage } from './lib/Pages';

export function SchedulesRoutes(): React.ReactElement {
  return (
    <Routes>
      <Route index element={<SchedulesPage />} />
    </Routes>
  );
}
