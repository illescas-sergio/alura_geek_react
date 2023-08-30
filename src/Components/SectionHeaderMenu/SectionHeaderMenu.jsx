
import Container from '../Container/Container.jsx';
import styles from './SectionHeaderMenu.module.css';

// eslint-disable-next-line react/prop-types
export default function SectionHeaderMenu({children}){

    return (
        <Container>
            <section className={styles.header__menu}>
                {children}
            </section>
        </Container>
        
    )
}
