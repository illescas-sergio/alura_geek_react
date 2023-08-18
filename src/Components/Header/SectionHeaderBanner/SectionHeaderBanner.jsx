import Banner from './Banner/Banner';
import styles from './SectionHeaderBanner.module.css';

export default function SectionHeaderBanner(){

    return (
        <section className={styles.header__banner}>
            <Banner />
        </section>
    )
}