import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

export function App(): ReactElement {
  return (
    <div>
      <Outlet />
    </div>
  );
}
