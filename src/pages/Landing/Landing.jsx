

import styles from "./Landing.module.css";
import { useSpring, animated } from '@react-spring/web';
import { Link } from "react-router-dom";
// import { useFetchProducts } from "../../hooks/useFetchProducts";

const LandingPage = () => {
  
  const logoSpring = useSpring({
    from: { transform: 'scale(0) rotateZ(0deg)' },
    to: { transform: 'scale(1) rotateZ(360deg)' },
    config: { duration: 1500 },
    delay: 1000,
  });

  const saludoSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
    delay: 2500,
  });

  // useFetchProducts()

  return (
    <div className={styles.landingPage}>
      <animated.div style={logoSpring} className={styles.logoContainer}>
        <img src="../../../assets/Logo.png" alt="Logo" className={styles.logo} />
      </animated.div>
      <animated.div style={saludoSpring} className={styles.welcomeMessage}>
        <h1>Bienvenidos!</h1>
        <Link to={"/home"}>
          <button className={styles.entrar}>Entrar</button>
        </Link>
      </animated.div>
    </div>
  );
};

export default LandingPage;
