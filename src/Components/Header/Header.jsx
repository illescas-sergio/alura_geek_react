import styles from './Header.module.css';
import SectionHeaderBanner from './SectionHeaderBanner/SectionHeaderBanner.jsx';
import SectionHeaderMenu from './SectionHeaderMenu/SectionHeaderMenu';

export default function Header(){
    return (
        <header className={styles.header}>
            <SectionHeaderMenu />
            <SectionHeaderBanner />
        </header>
    )
}
