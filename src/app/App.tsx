import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Gallery } from './pages/Gallery';
import { Booking } from './pages/Booking';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "gallery", Component: Gallery },
      { path: "booking", Component: Booking },
      { path: "*", Component: Home }, // Fallback to Home
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
