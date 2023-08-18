import styles from "./Footer.module.css";
import FooterSectionContent from "./FooterSectionContent/FooterSectionContent.jsx";
import FooterSectionPowered from "./FooterSectionPowered/FooterSectionPowered.jsx";

export default function Footer(){

    return (
    
        <footer className={styles.footer}>
            <FooterSectionContent />
            <FooterSectionPowered />
        </footer>
    
    )
}

