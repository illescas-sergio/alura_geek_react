import LoginButton from '../LoginButton/LoginButton.jsx';
import Logo from '../Logo/Logo.jsx';
import Container from '../../Container/Container.jsx';
import styles from './SectionHeaderMenu.module.css';

export default function SectionHeaderMenu(){

    return (
        <Container>
            <section className={styles.header__menu}>
                <Logo />
                <LoginButton />
            </section>
        </Container>
        
    )
}
