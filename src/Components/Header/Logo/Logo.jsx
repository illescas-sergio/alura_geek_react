import SearchBar from '../SearchBar/SearchBar';
import styles from './Logo.module.css';

export default function Logo(){

    return (
    
        <div className={styles.header__logo}>
            <img src="../assets/Logo.png" alt="" className={styles.header__logo__img} />
            <SearchBar />                
        </div>
        
    )
}

