import { Link} from "react-router-dom";

import styles from "./SideBar.module.css";

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.title}>
        <p>Category</p>
      </div>
      <div className={styles.list}>
        <li>
            <Link to="/articles/SemanticResponsivity.jsx" className={styles.link}>HTML</Link>
            <span>1</span>
        </li>
        <li>
            <Link to="/" className={styles.link}>CSS</Link>
            <span>1</span>
        </li>
        <li>
            <Link to="/" className={styles.link}> Java Script </Link>
            <span>1</span>
        </li>
        <li>
            <Link to="/" className={styles.link}> Java FX </Link>
            <span>1</span>
        </li>
        <li>
            <Link to="/" className={styles.link}> Java Spring Boot </Link>
            <span>1</span>
        </li>
        <li>
            <Link to="/" className={styles.link}> MySql </Link>
            <span>1</span>
        </li>
        <li>
            <Link to="/" className={styles.link}> ReactJS </Link>
            <span>1</span>
        </li>
        <li>
            <Link to="/" className={styles.link}> NodeJS </Link>
            <span>1</span>
        </li>
        <li>
            <Link to="/" className={styles.link}> MongoDB </Link>
            <span>1</span>
        </li>
        <li>
            <Link to="/" className={styles.link}> PHP Laravel </Link>
            <span>1</span>
        </li>
        
      </div>
    </div>
  );
}
export default SideBar;
