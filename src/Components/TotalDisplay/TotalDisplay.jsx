/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import styles from './TotalDisplay.module.css';
import { /*useNavigate*/ } from 'react-router-dom';
import { TotalCalculator, TotalItems } from '../../helpers/TotalCalculator';
// import { fetchProductDetails } from "../../services/fetchProductDetails";
// import {useDispatch} from "react-redux";
// import { setDetail } from "../../store/slices/productsSlice";
import ButtonsConsole from '../ButtonsConsole/ButtonsConsole';
import BuyButton from '../BuyButton/BuyButton';





// eslint-disable-next-line no-unused-vars
export default function TotalDisplay(){

    const {productsToBuy} = useSelector((state) => state.cart)

    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    return (
        <>
            <div className={styles.products__card}>
                <div className={styles.card__img} >
                    {/* <img className={styles.cardImg} src={imageUrl} alt={name} /> */}
                </div>
                <div className={(styles.card__details__area)}>
                    <div className={styles.card__title}>{"Detalle"}</div>
                    <div className={styles.details__link}>
                        {"Total a pagar"}
                    </div>
                </div>
                <div className={styles.card__details__area}>
                    {/* <div className={styles.card__priceTitle}> */}
                        {""} {/* MODIFICAR CSS PARA ALINEAR LAS LINEAS JAJAJAJA*/}
                    {/* </div> */}
                    <div className={styles.card__price}>{""}</div>
                </div>
                <div className={styles.card__quantity__area}>
                    <div className={styles.card__priceTitle}>Items</div>
                    <div className={styles.card__price}>{TotalItems(productsToBuy)}</div>
                </div>
                <div className={styles.card__quantity__area}>
                    <div className={styles.card__priceTitle}>Monto Total</div>
                    <div className={styles.card__price}>{TotalCalculator(productsToBuy)}</div>
                </div>
            </div>
            <ButtonsConsole>
                <BuyButton />
            </ButtonsConsole>
        </>
    
    )
}