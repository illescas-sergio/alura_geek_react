import { useEffect, useState } from 'react';
import LoginButton from '../LoginButton/LoginButton';
import Logo from '../Logo/Logo';
import LogoutButton from '../LogoutButton/LogoutButton';
import ProfileButton from '../ProfileButton/ProfileButton';
import { ProfileDiv } from '../ProfileDiv/ProfileDiv';
import SearchBar from '../SearchBar/SearchBar';
import SectionHeaderMenu from '../SectionHeaderMenu/SectionHeaderMenu';
import styles from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setUserLoggedIn, setUserLoggedOut } from '../../store/slices/userSlice';


useState
// eslint-disable-next-line react/prop-types
export default function Header({children}){

    const dispatch = useDispatch();

    const {isLoggedIn} = useSelector((state) => state.user);

    console.log("soy el estado de user en Header", isLoggedIn)

    useEffect(() => {
       
        const token = localStorage.getItem('token');

        if(token){
            dispatch(setUserLoggedIn());
        } else {
            dispatch(setUserLoggedOut());
        }
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    
    return (
        <header className={styles.header}>
            <SectionHeaderMenu>
                        <Logo>
                            <SearchBar />
                        </Logo>
                        {isLoggedIn ? (
                            <ProfileDiv>
                                <ProfileButton />
                                <LogoutButton />
                            </ProfileDiv>
                            ) : (
                            <LoginButton />
                            )
                        }
                    </SectionHeaderMenu>
           {children}
        </header>
    )
}
