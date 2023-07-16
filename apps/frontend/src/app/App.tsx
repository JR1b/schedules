import { Provider, darkTheme } from '@adobe/react-spectrum';
import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

export function App(): ReactElement {
  return (
    <Provider colorScheme="dark" theme={darkTheme}>
      <div className="h-screen bg-gray-700 text-gray-50">
        <Outlet />
      </div>
    </Provider>
  );
}
