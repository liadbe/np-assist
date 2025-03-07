import { AppContainer } from './views/AppContainer';
import ErrorPage from './views/ErrorPage';
import Dashboard from './views/Dashboard';
import Ravlt from './views/Ravlt';
import Rocft from './views/Rocft';
import LoadingMessage from './components/LoadingMessage';
import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const routes = [
  {
    element: <AppContainer />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        // handle: {
        //   crumb: (data) => <span>{data.threadName}</span>,
        // }
      },
      {
        path: 'rocft',
        element: (
          <Suspense fallback={<LoadingMessage />}>
            <Rocft />
          </Suspense>
        ),
        // handle: {
        //   crumb: (data) => <span>{data.threadName}</span>,
        // }
      },
      {
        path: 'ravlt',
        element: (
          <Suspense fallback={<LoadingMessage />}>
            <Ravlt />
          </Suspense>
        ),
      },
    ],
  },
];

export default function App() {
  const router = createBrowserRouter(routes, { basename: '/np-assist/' });

  return <RouterProvider router={router} />;
}