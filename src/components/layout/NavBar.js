    
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
        <div className={styles.logo}> 
            <Link to="/" className={styles.logo}>DevContainer</Link>
        </div>
        <div className={styles.mobile} onClick={() => setIsOpen(!isOpen)}>
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div className={styles.line2}></div>
        </div>
        {isOpen && (
          <div className={styles.navMobile}>
            <Link to="/" className={styles.navdiv} onClick={() => setIsOpen(!isOpen)} >Home</Link>
            <Link to="/contact" className={styles.navdiv} onClick={() => setIsOpen(!isOpen)}>Contact</Link>
            <Link to="/about" className={styles.navdiv} onClick={() => setIsOpen(!isOpen)}>About</Link>
          </div>
        )}

        <div className={styles.DeskTop}>
            <Link to="/" className={styles.DeskTopLink}>Home</Link>
            <Link to="/contact" className={styles.DeskTopLink}>Contact</Link>
            <Link to="/about" className={styles.DeskTopLink}>About</Link>
          </div>
        
    </nav>
  );
}

export default NavBar;
