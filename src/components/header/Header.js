import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles["header-style"]}>
      <h1>NOVI recepenwebsite</h1>
      <p>Het beste voedsel om goed te studeren!</p>
    </header>
  );
};

export default Header;