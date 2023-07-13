import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

function App(): ReactElement {
  return (
    <div>
      <h1>Welcome to app!</h1>
      <Outlet />
    </div>
  );
}

export default App;
