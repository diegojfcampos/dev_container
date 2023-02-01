import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

function Footer() {
return (
<footer className={styles.footer}>
    <div className={styles.footerdiv}>
        <Link to='http://linkedin.com/in/diegojfcampos' className={styles.footerlink}target="_blank"><img src="/icons8-linkedin-circled-48.png"></img></Link>
        <Link to='http://github.com/diegojfcampos' className={styles.footerlink} target="_blank"><img src="/icons8-github-48.png"></img></Link>
    </div>
    <p className={styles.copyrights}><span>Dev-Container &copy</span></p>



</footer>
);
}

export default Footer;