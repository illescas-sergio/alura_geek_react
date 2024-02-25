import { useEffect, useState } from 'react';
import Footer from '../../Components/Footer/Footer.jsx';
import Logo from '../../Components/Logo/Logo.jsx';
import SectionHeaderMenu from '../../Components/SectionHeaderMenu/SectionHeaderMenu.jsx';
import styles from './CreateAcountPage.module.css';
import { useNavigate } from 'react-router';


export default function CreateAcount(){

    const navigate = useNavigate();

    const [state, setState] = useState({
        email : "",
        username: "",
        password: ""
    });

    useEffect(() => {

    }, [state])

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
        fetch("http://127.0.0.1:8000/auth/register/", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json' // Especifica el tipo de contenido del cuerpo (body)
              //'Authorization': `Bearer ${token}` // Encabezado de autorización
            },
            body: JSON.stringify({
                email: state.email,
                username: state.username,
                password: state.password
            })
          })
            .then(response => {
            if (!response.ok) {
                throw new Error('Ocurrió un error al realizar la solicitud.');
            }
                return response.json(); // Procesar la respuesta como JSON
            })
            .then(data => {
            console.log('Respuesta del servidor:', data);
                setState({
                    email : "",
                    username: "",
                    password: ""
                })
                return navigate("/")
            })
            .catch(error => {
            console.error('Error:', error);
            // Aquí puedes manejar errores en la solicitud
            });
    }

    console.log(state)
    return (
        <>
            <SectionHeaderMenu>
                <Logo />
            </SectionHeaderMenu>
                <div className={styles.login}>
                    <div className={styles.login__div}>
                        <form className={styles.login__form} name="form" onSubmit={handleSubmit}>
                            <h4 className={styles.login__title}>Crear Cuenta</h4>
                            <input className={styles.login__inputEmail} type="email" name="email" placeholder="Escriba su correo electrónico" required autoComplete="off"
                            // pattern="^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$"
                            onChange={handleChange} value={state.email}/>
                            <input className={styles.login__inputEmail} type="text" name="username" placeholder="Escriba su nombre de usuario" required autoComplete="off"
                            // pattern="^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$"
                            onChange={handleChange} value={state.username}/>
                            <input className={styles.login__inputPassword} type="password" name="password" placeholder="Ingrese su contraseña" required 
                            // pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$" 
                            autoComplete="off" onChange={handleChange} value={state.password}/>
                            <button type="submit" className={styles.login__buttonLogin} >Crear</button>
                        </form>
                    </div>    
                </div>
            <Footer />
        </>         
    )
}