import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './pages/Home/Home.jsx';
import Blogs from './pages/Blogs/Blogs.jsx';
import ViewDetails from './pages/viewDetails/ViewDetails.jsx';
import AddToy from './pages/addToy/AddToy.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Register from './pages/Register/Register.jsx';
import Login from './pages/login/Login.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import AllToys from './pages/allToys/AllToys.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/blogs',
        element: <Blogs> </Blogs>
      },
      {
        path: '/toy/:id',
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/toy/${params.id}`)
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/addToy',
        element: <AddToy></AddToy>
      },
      {
        path: '/allToys',
        element: <AllToys></AllToys>,
        loader: () => fetch('http://localhost:5000/toys')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='container mx-auto'>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>,
  </div>
)
