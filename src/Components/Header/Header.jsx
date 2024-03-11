import { useEffect } from 'react';
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


// eslint-disable-next-line react/prop-types
export default function Header({children}){

    const dispatch = useDispatch();

    const {isLoggedIn} = useSelector((state) => state.user);

    useEffect(() => {
       
        const token = localStorage.getItem('token');

        if(!token){
            dispatch(setUserLoggedOut());
        } else {
            dispatch(setUserLoggedIn());
        }
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoggedIn])
    
    
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
