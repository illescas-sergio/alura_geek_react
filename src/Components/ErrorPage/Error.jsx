import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Logo from '../Logo/Logo';
import SectionHeaderMenu from '../SectionHeaderMenu/SectionHeaderMenu.jsx';
import styles from './Error.module.css';

export default function Login(){

    return (
        <>
            <SectionHeaderMenu>
                <Logo />
            </SectionHeaderMenu>
                <div className={styles.login}>
                    <div className={styles.login__div}>
                        <form className={styles.login__form} name="form">
                            <h4 className={styles.login__title}>Lo sentimos. Ha ocurrido un error</h4>
                            
                        </form>
                        <p className={styles.login_crearCuenta}><Link to={"createAcount"}>Ir al inicio</Link></p>   
                    </div>    
                </div>
            <Footer />
        </>         
    )
}