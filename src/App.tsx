import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import WorkoutsListPage from 'pages/WorkoutsList'
import ErrorPage from 'pages/ErrorPage'
import WorkoutDetailsPage from 'pages/WorkoutDetails'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'scss/globals.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <WorkoutsListPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/workouts/:workoutId',
    element: <WorkoutDetailsPage />
  }
])

const App: React.FC = () => {
  return <RouterProvider router={router} />
}

export default App
