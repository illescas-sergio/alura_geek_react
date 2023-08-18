import styles from './Card.module.css';

export default function Card(){

    return (
        <div className={styles.products__cards}>
            <div className={styles.card__img} >
                <img className={styles.cardImg} src="/assets/products/unsplash_6FDXGY9J6y4.png" alt="producto XYZ" />
            </div>
            <div className={styles.card__title}>Producto XYZ</div>
            <div className={styles.card__price}>$ 60.00</div>
            <a href="" className={styles.card__details}>Ver producto</a>
        </div>
    )
}