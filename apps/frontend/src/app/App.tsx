import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import { defaultTheme, Provider } from '@adobe/react-spectrum';

export function App(): ReactElement {
  return (
    <Provider theme={defaultTheme} colorScheme={'dark'}>
      <div className="h-screen">
        <Outlet />
      </div>
    </Provider>
  );
}
