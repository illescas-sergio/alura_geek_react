
// import Header from '../../Components/Header/Header.jsx';
import SectionHeaderBanner from '../../Components/SectionHeaderBanner/SectionHeaderBanner.jsx';
import ProductsGallery from '../../Components/ProductsGallery/ProductsGallery.jsx';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '../../services/fetchUserProfile.js';
import { setUserData } from '../../store/slices/userSlice.js';



// eslint-disable-next-line react/prop-types
export default function Home(){

    const {isLoggedIn} = useSelector((state) => state.user);
    
    const dispatch = useDispatch()

    useEffect(() => {

        if(isLoggedIn){
            fetchUserProfile()
            .then(resp => resp.json())
            .then(data => {
                dispatch(setUserData(data));
            });
            
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoggedIn]);
       
    return (
        <>
            <SectionHeaderBanner />
            <ProductsGallery />
        </>     
    )
}

