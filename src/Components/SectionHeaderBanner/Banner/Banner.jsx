import styles from './Banner.module.css';
import BannerText from '../BannerText/BannerText.jsx';

export default function Banner(){

    return (
        <div className={styles.banner}>
               <BannerText />             
        </div>
    )
}

