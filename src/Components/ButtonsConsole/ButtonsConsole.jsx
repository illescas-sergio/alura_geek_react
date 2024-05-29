import Container from "../Container/Container";
import styles from "./ButtonsConsole.module.css";
// import BuyButton from "../BuyButton/BuyButton";
// import AddToCartButton from "../AddToCartButton/AddToCartButton";

// eslint-disable-next-line react/prop-types
export default function ButtonsConsole({children}){

    return (
        <Container>
            <div className={styles.botoneraDiv}>
            {
                children
            }
            </div>
        </Container>
        
    )
}