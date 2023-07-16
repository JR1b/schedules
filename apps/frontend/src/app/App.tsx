import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

export function App(): ReactElement {
  return (
    <div className="h-screen bg-black text-gray-50">
      <Outlet />
    </div>
  );
}
