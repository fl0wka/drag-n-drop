import { RouteObject, Navigate } from 'react-router-dom';
import Lesson1Page from './pages/lesson1Page';
import Lesson2Page from './pages/lesson2Page';
import Lesson3Page from './pages/lesson3Page';

export const routes: RouteObject[] = [
  {
    path: 'lesson1',
    element: <Lesson1Page />,
  },
  {
    path: 'lesson2',
    element: <Lesson2Page />,
  },
  {
    path: 'lesson3',
    element: <Lesson3Page />,
  },
  { path: '*', element: <Navigate to="lesson1" /> },
];
