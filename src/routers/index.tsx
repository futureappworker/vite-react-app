import { createBrowserRouter } from 'react-router-dom';

import BaseLayout from '@/layouts/BaseLayout';

import ErrorPage from '@/pages/ErrorPage';

import Home from '@/pages/Home';
import About from '@/pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

export default router;
