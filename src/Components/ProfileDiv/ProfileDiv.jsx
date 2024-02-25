import styles from "./ProfileDiv.module.css";


/* eslint-disable react/prop-types */
export const ProfileDiv = ({children}) => {
    return (
        <div className={styles.divProfile}>
            {children}
        </div>
    )
}