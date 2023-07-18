import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.min.css';

import { ToastPortal } from '@schedules/ui';

export function App(): ReactElement {
  return (
    <div className="bg-slate-700 text-gray-50">
      <Outlet />
      <ToastPortal />
    </div>
  );
}
