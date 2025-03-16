import { useEffect } from "react";
import styles from "./Payment.module.css";
import { Link, useNavigate } from "react-router-dom";
import { automaticRedirect } from "../../helpers/automaticRedirect";


export default function Payment(){


    const navigate = useNavigate();

    useEffect(() => {
        automaticRedirect(navigate, "/home", 2000)
    }, [navigate])



    return (
        <div className={styles.logoutSuccessPage}>
            <h1>La pasarela de pagos no será implementada</h1>
            <div>
                <p>Si no eres redirigido a Inicio automaticamente, haz click <Link className={styles.linkToHome} to={"/home"}>aquí</Link> </p>
            </div>

        </div>
    )
}