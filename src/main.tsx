import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import router from '@/routers';
import store from '@/store';

import '@/styles/bootstrap/bootstrap.scss';

import './i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
