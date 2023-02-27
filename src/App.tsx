import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import StartingPage from './pages/StartingPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <StartingPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
