import styles from './Login.module.css';

export default function Login(){

    return (
        
        <div className={styles.login}>
            <div className={styles.login__div}>
                <form className={styles.login__form} name="form">
                    <h4 className={styles.login__title}>Iniciar Sesión</h4>
                    <input className={styles.login__inputEmail} type="email" name="email" placeholder="Escriba su correo electrónico" required autoComplete="off" pattern="^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$" />
                    <input className={styles.login__inputPassword} type="password" name="contraseña" placeholder="Ingrese su contraseña" required pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$" autoComplete="off" />
                    <button type="submit" className={styles.login__buttonLogin} >Entrar</button>
                </form>   
            </div>    
        </div>
    )
}