/* eslint-disable react/prop-types */
import styles from './Card.module.css';

export default function Card({name, price, imageUrl}){

    return (
        <div className={styles.products__cards}>
            <div className={styles.card__img} >
                <img className={styles.cardImg} src={imageUrl} alt={name} />
            </div>
            <div className={styles.card__title}>{name}</div>
            <div className={styles.card__price}>{price}</div>
            <a href="" className={styles.card__details}>Ver producto</a>
        </div>
    )
}