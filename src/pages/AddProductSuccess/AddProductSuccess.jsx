import { useEffect } from "react";
import styles from "../LogoutSuccess/LogoutSuccess.module.css";
import { Link, useNavigate } from "react-router-dom";
import { automaticRedirect } from "../../helpers/automaticRedirect";


export default function AddProductSuccess(){


    const navigate = useNavigate();

    useEffect(() => {
        automaticRedirect(navigate, "/myProducts", 2000)
    }, [navigate])



    return (
        <div className={styles.logoutSuccessPage}>
            <h1>Producto agregado correctamente</h1>
            <div>
                <p>Si no eres redirigido automaticamente, haz click <Link className={styles.linkToHome} to={"/myProducts"}>aquí</Link> </p>
            </div>

        </div>
    )
}