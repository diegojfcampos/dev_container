import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

function NavBar() {
  return (
    
    <nav className={styles.navbar}>
        <div className={styles.logo}> 
            <Link to="/" className={styles.logo}>DevContainer</Link>
        </div>
        <div className={styles.navidv}>
            <Link to="/" className={styles.navdiv}>Home</Link>
            <Link to="/contact" className={styles.navdiv}>Contact</Link>
            <Link to="/about" className={styles.navdiv}>About</Link>
        </div>
        
    </nav>
  );
}

export default NavBar;
