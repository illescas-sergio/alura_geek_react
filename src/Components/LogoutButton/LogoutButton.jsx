import { Link, useNavigate } from 'react-router-dom';
import styles from './LogoutButton.module.css';
import { useDispatch } from 'react-redux';
import { setUserLoggedOut } from '../../store/slices/userSlice';
import fetchUserLogout from '../../services/fetchUserLogout';

// eslint-disable-next-line react/prop-types
export default function LogoutButton(){

    const dispatch = useDispatch();

    const navigate = useNavigate()
    
    const handleLogout = () => {
        
        // Establecer el estado de autenticación como falso
        console.log("click en logout")
        dispatch(setUserLoggedOut());

        fetchUserLogout()
        .then(data => {
            console.log(data)
            localStorage.removeItem('token');
            return navigate("/app")
        })
        .catch(err => {
            console.error(err)
        })
        
    };

    return (
        <Link >
            <button onClick={handleLogout} className={styles.header__botonLogin}>Cerrar Sesión</button>
        </Link>
    )
}