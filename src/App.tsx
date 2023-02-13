import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Workouts from './pages/WorkoutsList';
import ErrorPage from './pages/ErrorPage';
import WorkoutDetailsPage from './pages/WorkoutDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Workouts /> ,
    errorElement: <ErrorPage />
  },
  {
    path: '/workouts/:workoutId',
    element: <WorkoutDetailsPage />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
