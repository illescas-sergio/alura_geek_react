import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

// eslint-disable-next-line react/prop-types
export default function Logo({children}){

    return (
    
        <div className={styles.header__logo}>
            <Link to={"/"}>
                <img src="../assets/Logo.png" alt="" className={styles.header__logo__img} />
            </Link>
           {children}
        </div>
        
    )
}

