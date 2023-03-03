import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RootStartingLayout from './pages/Root';
import StartingPage from './pages/StartingPage';
import Signup from './pages/Signup';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootStartingLayout />,
    children: [
      {
        path: '',
        element: <StartingPage />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
