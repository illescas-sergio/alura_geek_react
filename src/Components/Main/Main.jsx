
import { useSelector } from 'react-redux';
import ProductsGallery from '../ProductsGallery/ProductsGallery';
 import SectionHeaderBanner from "../SectionHeaderBanner/SectionHeaderBanner.jsx";
import { useEffect } from 'react';
import Home from '../../pages/Home/Home.jsx';

export default function Main(){

  const {isLoggedIn} = useSelector((state) => state.user)

  console.log("soy el estado de user en Main", isLoggedIn)

  useEffect(() => {
    console.log("soy el effect en Main", isLoggedIn)
  }, [isLoggedIn])

    return (
      isLoggedIn ? <Home /> : (<><SectionHeaderBanner /><ProductsGallery /></>)
    )
}


