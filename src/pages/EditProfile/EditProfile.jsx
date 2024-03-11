import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./EditProfile.module.css";
import SectionHeaderMenu from "../../Components/SectionHeaderMenu/SectionHeaderMenu";
import Logo from "../../Components/Logo/Logo";
import SearchBar from "../../Components/SearchBar/SearchBar";
import LogoutButton from "../../Components/LogoutButton/LogoutButton";
import Footer from "../../Components/Footer/Footer";
import { ProfileDiv } from "../../Components/ProfileDiv/ProfileDiv";
import { useDispatch, useSelector } from "react-redux";
import { setUserLoggedIn } from "../../store/slices/userSlice";
import { fetchEditUserProfile } from "../../services/fetchEditUserProfile";


export default function EditProfile(){

    const {isLoggedIn} = useSelector((state) => state.user);

    const {userData} = useSelector((state) => state.user);

    console.log(userData)

    const dispatch = useDispatch();

    const navigate = useNavigate();


    useEffect(() => {
        if(isLoggedIn === false || isLoggedIn === null){
            return navigate("/")
        } else {
            dispatch(setUserLoggedIn())
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoggedIn]);
    
    const [state, setState] = useState({
        username: ""
    });

    const handleChange = (e) => {
        setState((prev) => {

            return {
                ...prev,
                [e.target.name] : e.target.value
            }

        })
    }

    const handleSubmit = () => {
        fetchEditUserProfile(state.username)
        .then(resp => resp.json())
        .then(data => {
            console.log("respuesta de la edicion de perfil", data)
            return console.log("listo")    
        })
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
                        <form className={styles.profile__form} name="form" onSubmit={handleSubmit} id="profileForm">
                            
                            <h4 className={styles.profile__title}>Editar datos</h4>
                            
                            <input className={styles.profile__inputEmail} type="email" name="email" placeholder="Escriba su correo electrónico" required autoComplete="off" 
                            // pattern="^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$" 
                            value={userData.email} readOnly/>

                            <input className={styles.profile__inputPassword} type="text" name="username" placeholder="Ingrese su nombre de usuario" required 
                            // pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$"
                            autoComplete="off" onChange={handleChange} value={state.username}/>
                            
                            <button type="submit" className={styles.profile__buttonLogin} >Enviar</button>
                        
                        </form>
                        <p className={styles.profile_crearCuenta}><Link to={"/profile"}>Cancelar</Link></p>   
                    </div>    
                </div>

            <Footer /> 

        </>
        
    )
}