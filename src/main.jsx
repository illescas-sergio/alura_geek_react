import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App.jsx'
import LoginPage from './Components/Login/LoginPage.jsx';
import CreateAcount from './Components/CreateAcount/CreateAcountPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/createAcount",
    element: <CreateAcount />
  }
]);

// [
//   {
//     path: "/",
//     element: <Root />,
//     children: [
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//       {
//         path: "dashboard",
//         element: <Dashboard />,
//         loader: ({ request }) =>
//           fetch("/api/dashboard.json", {
//             signal: request.signal,
//           }),
//       },
//       {
//         element: <AuthLayout />,
//         children: [
//           {
//             path: "login",
//             element: <Login />,
//             loader: redirectIfUser,
//           },
//           {
//             path: "logout",
//             action: logoutUser,
//           },
//         ],
//       },
//     ],
//   },
// ]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
