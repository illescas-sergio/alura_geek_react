import { useSelector } from "react-redux";

import styles from "./BuyButton.module.css";
import { useNavigate } from "react-router";

export default function BuyButton() {

    const {isLoggedIn} = useSelector(state => state.user);
    const navigate = useNavigate()

    const handleBuy = () => {
        return isLoggedIn ? navigate("/buy_success") : navigate("/login")
    }

    return (

        
        <div onClick={handleBuy}>
            <button className={styles.buyButton}>Comprar</button>
        </div>
    )
}