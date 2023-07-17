import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

export function App(): ReactElement {
  return (
    <div className="bg-slate-700 text-gray-50">
      <Outlet />
    </div>
  );
}
