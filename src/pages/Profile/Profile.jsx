import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styles from "./Profile.module.css";
import SectionHeaderMenu from "../../Components/SectionHeaderMenu/SectionHeaderMenu";
import Logo from "../../Components/Logo/Logo";
import SearchBar from "../../Components/SearchBar/SearchBar";
import LogoutButton from "../../Components/LogoutButton/LogoutButton";
import Footer from "../../Components/Footer/Footer";
import { ProfileDiv } from "../../Components/ProfileDiv/ProfileDiv";
import { useSelector } from "react-redux";


export default function Profile(){

    const {isLoggedIn} = useSelector((state) => state.user);

    const state = useSelector((state) => state.user);

    const {userData} = useSelector((state) => state.user);

    console.log(state, userData)

    const navigate = useNavigate();

    useEffect(() => {
        if(isLoggedIn === false || isLoggedIn === null){
            console.log("te redirecciono por GIL")
            return navigate("/app")
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleChange = () => {

    }


    const handleSubmit = () => {

    }


    return (
    
        <>
            <header className={styles.header}>
                <SectionHeaderMenu>
                    <Logo>
                        <SearchBar />
                    </Logo>
                    <ProfileDiv>
                        <LogoutButton />
                    </ProfileDiv>
                </SectionHeaderMenu>
            </header>

            <div className={styles.profile}>
                    <div className={styles.profile__div}>
                        <form className={styles.profile__form} name="form" onSubmit={handleSubmit}>
                            <h4 className={styles.profile__title}>Datos de perfíl</h4>
                            <input className={styles.profile__inputEmail} type="email" name="email" placeholder="Escriba su correo electrónico" required autoComplete="off" 
                            // pattern="^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$" 
                            onChange={handleChange}/>
                            <input className={styles.profile__inputPassword} type="password" name="password" placeholder="Ingrese su contraseña" required 
                            // pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$"
                            autoComplete="off" onChange={handleChange}/>
                            <button type="submit" className={styles.profile__buttonLogin} >Entrar</button>
                        </form>
                        <p className={styles.profile_crearCuenta}>¿No tiene cuenta? Puede crear una <Link to={"../createAcount"}>aquí</Link></p>   
                    </div>    
                </div>
            <Footer />
            
            <Link to={"/home"}>
                <button>Volver</button>        
            </Link>
        
            
        </>
        
    )
}