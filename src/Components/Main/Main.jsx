import styles from './Main.module.css';
import ProductsSection from '../ProductsSection/ProductsSection';

export default function Main(){

    return (
        <main className={styles.products}>
        
            <ProductsSection />

        </main>
    )
}


