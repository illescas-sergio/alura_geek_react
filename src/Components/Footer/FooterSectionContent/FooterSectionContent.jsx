import styles from './FooterSectionContent.module.css';
import Container from '../../Container/Container.jsx';
import FooterLogo from '../FooterLogo/FooterLogo.jsx';
import FooterLinks from '../FooterLinks/FooterLinks.jsx';
import FooterContact from '../FooterContact/FooterContact.jsx';

export default function FooterSectionContent(){

    return (
        <section className={styles.footer__content} >
            <Container>
                <div className={styles.footer__flex}>
                        <FooterLogo />
                        <FooterLinks />
                        <FooterContact />
                </div>
            </Container>
        </section>
    )
}