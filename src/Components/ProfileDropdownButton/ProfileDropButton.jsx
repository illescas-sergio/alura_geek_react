import { useState } from 'react';
import styles from './ProfileDropdown.module.css'; // Asegúrate de crear este archivo CSS para tus estilos personalizados
import ProfileButton from '../ProfileButton/ProfileButton.jsx';
import LogoutButton from '../LogoutButton/LogoutButton.jsx';
import MyProductsButton from '../MyProductsButton/MyProductsButton.jsx';

const ProfileDropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown} onClick={toggleDropdown}>
      <button className={styles.headerBotonLogin}>
        Menú
      </button>
      {isOpen && (
        <div className={`${styles.dropdownMenu} ${isOpen ? styles.show : ''}`} onClick={closeDropdown}>
          <ProfileButton />
          <MyProductsButton />
          <LogoutButton />
        </div>
      )}
    </div>
  );
};

export default ProfileDropdownButton;
