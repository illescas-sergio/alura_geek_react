import styles from './Header.module.css';

// eslint-disable-next-line react/prop-types
export default function Header({children}){
    return (
        <header className={styles.header}>
           {children}
        </header>
    )
}
