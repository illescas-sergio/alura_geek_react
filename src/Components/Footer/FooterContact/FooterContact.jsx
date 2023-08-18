import styles from './FooterContact.module.css';

export default function FooterContact(){

    return (
        <div className={styles.footer__contact}>
            <form className={styles.footer__form} name="form" >
                <h4 className={styles.form__title}>Hable con nosotros</h4>
                <div className={styles.form__inputDiv}>
                    <span className={styles.form__inputPlaceholder}>Nombre</span>
                    <input className={styles.form__input} type="text" name="nombre"  max="40" min="3" required />
                </div>
                <textarea className={styles.form__textarea} rows="5" cols="40" id="mensagem" name="mensaje" placeholder="Mensaje" required minLength="3" maxLength="120"></textarea>
                <button type="submit" className={styles.form__button} >Enviar mensaje</button>
            </form>   
        </div>
    )
}