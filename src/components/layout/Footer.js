import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

function Footer() {
return (
<footer className={styles.footer}>
    <div className={styles.footerdiv}>
        <Link to='http://linkedin.com/in/diegojfcampos' className={styles.footerlink}target="_blank"><img src="../assets/icons8-linkedin-circled-48.png" alt="linkedin logo"></img></Link>
        <Link to='http://github.com/diegojfcampos' className={styles.footerlink} target="_blank"><img src="../assets/icons8-github-48.png" alt="github logo"></img></Link>
    </div>
    <p className={styles.copyrights}><span> &copy Dev-Container </span></p>


</footer>
);
}

export default Footer;