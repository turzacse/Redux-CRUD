import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './Pages/Home/Home.jsx';
import Main from './Layout/Main.jsx';
import ViewBooks from './Feature/Books/ViewBooks.jsx';
import AddBooks from './Feature/Books/AddBooks.jsx';
import EditBooks from './Feature/Books/EditBooks.jsx';
import { Provider } from 'react-redux';
import store from './app/store.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/books',
        element: <ViewBooks/>
      },
      {
        path: '/add-books',
        element:<AddBooks/>
      },
      {
        path: '/edit-book',
        element:<EditBooks/>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
