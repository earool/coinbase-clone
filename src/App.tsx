import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Root from './pages/Root';
import StartingPage from './pages/StartingPage';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
// Home
import HRoot from './pages/Home/HRoot';
import HomeMain from './pages/Home/HomeMain';
import AssetsMain from './pages/Home/Assets';
import PayMain from './pages/Home/PayMain';
import TradeMain from './pages/Home/Trade';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <StartingPage />,
      },
      {
        path: 'signin',
        element: <Signin />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
      {
        path: 'u',
        element: <HRoot />,
        children: [
          {
            path: 'home',
            element: <HomeMain />,
          },
          {
            path: 'assets',
            element: <AssetsMain />,
          },
          {
            path: 'pay',
            element: <PayMain />,
          },
          {
            path: 'trade',
            element: <TradeMain />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
