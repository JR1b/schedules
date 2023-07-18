import { ToastContainer } from 'react-toastify';

/**
 * This component is used to render the toast portal.
 * @example
 * <ToastPortal />
 */

export function ToastPortal(): React.ReactElement {
  return (
    <ToastContainer
      theme="dark"
      toastClassName={() =>
        'relative flex my-2 py-3 px-2 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer shadow-sm bg-slate-900 text-gray-50 border border-gray-50/25'
      }
    />
  );
}
