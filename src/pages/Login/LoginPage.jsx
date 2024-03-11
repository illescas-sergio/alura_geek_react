import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Footer from '../../Components/Footer/Footer.jsx';
import Logo from '../../Components/Logo/Logo.jsx';
import SectionHeaderMenu from '../../Components/SectionHeaderMenu/SectionHeaderMenu.jsx';
import styles from './LoginPage.module.css';
import fetchUserLogin from '../../services/fetchUserLogin.js';
import { setUserLoggedIn } from '../../store/slices/userSlice.js';
import { useDispatch } from 'react-redux';




export default function Login(){

    const navigate = useNavigate();

    const dispatch = useDispatch()

    const [state, setState] = useState({
        email : "",
        password: ""
    });

    useEffect(() => {

    }, [state]);


    const handleChange = (e) => {

        setState((prev) => {
            
            return {
                ...prev,
                [e.target.name] : e.target.value
            }
        });
    };



    const handleSubmit = (e) => {
        e.preventDefault()

        fetchUserLogin(state.email, state.password)
            .then(response => {
            if (!response.ok) {
                throw new Error('Ocurrió un error al realizar la solicitud.');
            }
                return response.json();
            })
            .then(data => {
            
                localStorage.setItem("token", data["token"])
                setState({
                    email : "",
                    password: ""
                });
                dispatch(setUserLoggedIn());
                return navigate("/home")
            })
            .catch(error => {
            console.error('Error:', error);
                return navigate("/app")
            });
    }

    return (
        <>
            <SectionHeaderMenu>
                <Logo />
            </SectionHeaderMenu>
                <div className={styles.login}>
                    <div className={styles.login__div}>
                        <form className={styles.login__form} name="form" onSubmit={handleSubmit}>
                            <h4 className={styles.login__title}>Iniciar Sesión</h4>
                            <input className={styles.login__inputEmail} type="email" name="email" placeholder="Escriba su correo electrónico" required autoComplete="off" 
                            // pattern="^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$" 
                            onChange={handleChange}/>
                            <input className={styles.login__inputPassword} type="password" name="password" placeholder="Ingrese su contraseña" required 
                            // pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$"
                            autoComplete="off" onChange={handleChange}/>
                            <button type="submit" className={styles.login__buttonLogin} >Entrar</button>
                        </form>
                        <p className={styles.login_crearCuenta}>¿No tiene cuenta? Puede crear una <Link to={"../createAcount"}>aquí</Link></p>   
                    </div>    
                </div>
            <Footer />
        </>         
    )
}