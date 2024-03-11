import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import LoginPage from './pages/Login/LoginPage.jsx';
import CreateAcount from './pages/CreateAcount/CreateAcountPage.jsx';
import ShowSection from './Components/ShowSection/ShowSection';
import store from './store/store.js';
import ProductDetail from './pages/ProductDetail/ProductDetailPage.jsx';
import App from './App.jsx';
import LandingPage from './pages/Landing/Landing.jsx';
import Profile from './pages/Profile/Profile.jsx';
import EditProfile from './pages/EditProfile/EditProfile.jsx';



const router = createBrowserRouter([

  {
    path: "/",
    element: <LandingPage />,
  },
  // {
  //   path: "/app",
  //   element: <App />
  // },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/editprofile",
    element: <EditProfile />
  },
  {
    path: "/categories/:category",
    element: <ShowSection />
  },
  {
    path: "/detail",
    element: <ProductDetail />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/createAcount",
    element: <CreateAcount />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)


