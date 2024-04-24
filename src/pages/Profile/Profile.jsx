import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styles from "./Profile.module.css";
// import SectionHeaderMenu from "../../Components/SectionHeaderMenu/SectionHeaderMenu";
// import Logo from "../../Components/Logo/Logo";
// import SearchBar from "../../Components/SearchBar/SearchBar";
// import LogoutButton from "../../Components/LogoutButton/LogoutButton";
// import Footer from "../../Components/Footer/Footer";
// import { ProfileDiv } from "../../Components/ProfileDiv/ProfileDiv";
import { useDispatch, useSelector } from "react-redux";
import { setUserLoggedIn } from "../../store/slices/userSlice";
import SimilProds from "../../Components/SimilProds/SimilProds";


export default function Profile(){

    const {isLoggedIn} = useSelector((state) => state.user);

    const {userData} = useSelector((state) => state.user);

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
    

    return (
    
        <>
            <div className={styles.profile}>
                <div className={styles.profile__div}>
                    <form className={styles.profile__form} name="form" id="profileForm">
                        <h4 className={styles.profile__title}>Datos de perfíl</h4>
                        <input className={styles.profile__inputEmail} type="email" name="email" value={userData.email} readOnly/>
                        <input className={styles.profile__inputPassword} type="text" name="username" value={userData.username} readOnly/>
                        <Link to={"/editprofile"}><button className={styles.profile__buttonLogin} >Editar</button></Link>
                    </form>
                    <p className={styles.profile_crearCuenta}><Link to={"/home"}>Volver</Link></p>   
                </div>
                <div className={styles.marginDivOwner}>
                    <SimilProds category={"categoría TRES"}/>    
                </div>
            </div>
        </>
        
    )
}