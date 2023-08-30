import styles from './SearchBar.module.css';

export default function SearchBar(){
    return (
        <div className={styles.header__menu__search}>
            <input className={styles.header__menu__input}  type="text" placeholder="¿Qué deseas buscar?" />
            <button ><img src="../assets/lupa.png" alt="" /></button>                    
        </div> 
    )
}
 