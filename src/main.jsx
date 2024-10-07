import { StrictMode } from 'react'
import React from 'react';
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import TodoList from './TodoList.jsx';


const router = createBrowserRouter([  // Import components that are used in routes
  {
    path: "/",
    element: <App />,
    children: [                       // children are nested routes with a route
      {
        element: <TodoList />,
        index: true                   // index route does not need any path
      },
      {
        path: "home",
        element: <Home />
      },
      {
        path: "about",                // path can be defined relative to the parent path
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
