import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import LoginPage from './pages/Login/LoginPage.jsx';
import CreateAcount from './pages/CreateAcount/CreateAcountPage.jsx';
import store from './store/store.js';
import ProductDetail from './pages/ProductDetail/ProductDetailPage.jsx';
import App from './App.jsx';
import LandingPage from './pages/Landing/Landing.jsx';
import Profile from './pages/Profile/Profile.jsx';
import EditProfile from './pages/EditProfile/EditProfile.jsx';
import Home from "./pages/Home/Home.jsx"
// import ShowSection from './Components/ShowSection/ShowSection.jsx';
import Categories from './pages/Categories/Categories.jsx';
import MyProducts from './pages/MyProducts/MyProducts.jsx';
import LogoutSuccess from './pages/LogoutSuccess/LogoutSuccess.jsx';
import AddProductSuccess from './pages/AddProductSuccess/AddProductSuccess.jsx';
import AddAndEditProducts from './pages/AddAndEditProducts/AddAndEditProducts.jsx';
import Cart from './pages/Cart/Cart.jsx';



const router = createBrowserRouter([ 

  {
    path: "/",
    element: <LandingPage />,
  },
  {
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/categories/:category",
        element: <Categories />
      },
      {
        path: "/product/:id",
        element: <ProductDetail />
      },
      {
        path: "/myProducts",
        element: <MyProducts />
      },
      {
        path: "/addProducts",
        element: <AddAndEditProducts />,
      },
      {
        path: "/addProductSuccess",
        element: <AddProductSuccess />
      },
      {
        path: "/product/edit/:id",
        element: <AddAndEditProducts />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/editprofile",
        element: <EditProfile />
      },
      {
        path: "/cart",
        element: <Cart />
      },
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/createAcount",
    element: <CreateAcount />
  },
  {
    path: "/logout",
    element: <LogoutSuccess />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
