import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Logo from '../Logo/Logo';
import SectionHeaderMenu from '../SectionHeaderMenu/SectionHeaderMenu.jsx';
import styles from './LoginPage.module.css';

export default function Login(){

    return (
        <>
            <SectionHeaderMenu>
                <Logo />
            </SectionHeaderMenu>
                <div className={styles.login}>
                    <div className={styles.login__div}>
                        <form className={styles.login__form} name="form">
                            <h4 className={styles.login__title}>Iniciar Sesión</h4>
                            <input className={styles.login__inputEmail} type="email" name="email" placeholder="Escriba su correo electrónico" required autoComplete="off" pattern="^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$" />
                            <input className={styles.login__inputPassword} type="password" name="contraseña" placeholder="Ingrese su contraseña" required pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$" autoComplete="off" />
                            <button type="submit" className={styles.login__buttonLogin} >Entrar</button>
                        </form>
                        <p className={styles.login_crearCuenta}>¿No tiene cuenta? Puede crear una <Link to={"../createAcount"}>aquí</Link></p>   
                    </div>    
                </div>
            <Footer />
        </>         
    )
}