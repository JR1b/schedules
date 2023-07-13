import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import './styles.css';
import { routes } from './routes';

const router = createBrowserRouter(createRoutesFromElements(routes));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
