import Cards from "../../components/cards/Cards.js";
import Sidebar from "../layout/SideBar";
import styles from "./Home.module.css";
import { Link, Route, Routes } from "react-router-dom";
import React from "react";
import SemanticResponsivity from "../articles/SemanticResponsivity";
import SpringBootFunctions from "../articles/SpringBootFunctions";
import ReactStateHooks from "../articles/ReactStateHooks";
import JavaFXEnvironment from "../articles/JavaFXEnvironment";

function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.cardBody}>

        <div className={styles.cardContainer}>
          <Link exact to="/semanticresponsivity" className={styles.cardLink}>
            <div className={styles.cardArea}>
              <Cards
                className={styles.cardImage}
                title="HTML/CSS"
                subject="10/12/2022"
              ></Cards>
              <div className={styles.cardImageTitle}>
                <h2>HTML AND CSS</h2>
                <p>How semantic HTML, CSS Flex box and Grid layout Work?</p>
              </div>
            </div>
          </Link>
        </div>

        <div className={styles.cardContainer}>
          <Link exact to="/springbootfunctions" className={styles.cardLink}>
            <div className={styles.cardArea}>
              <Cards
                className={styles.cardImage}
                title="Java"
                subject="03/02/2023"
              ></Cards>
              <div className={styles.cardImageTitle}>
                <h2>Java Spring Boot</h2>
                <p>Main functions of Spring Boot</p>
              </div>
            </div>
          </Link>
        </div>

        <div className={styles.cardContainer}>
          <Link exact to="/reactstatesandhooks" className={styles.cardLink}>
            <div className={styles.cardArea}>
              <Cards
                className={styles.cardImageRand}
                title="ReactJS"
                subject="04/02/2023"
              ></Cards>
              <div className={styles.cardImageTitle}>
                <h2>React JS</h2>
                <p>Undestanding State and Hooks</p>
              </div>
            </div>
          </Link>
        </div>

        <div className={styles.cardContainer}>
          <Link exact to="/javafxenvironment" className={styles.cardLink}>
            <div className={styles.cardArea}>
              <Cards
                className={styles.cardImage}
                title="Java FX"
                subject="02/02/2023"
              ></Cards>
              <div className={styles.cardImageTitle}>
                <h2>Java FX</h2>
                <p>Setting up JavaFX envoriment on Eclipse</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <aside className={styles.sidebarContainer}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
      </aside>
      <Routes>
        <Route
          exact
          path="/semanticresponsivity"
          element={<SemanticResponsivity />}
        ></Route>
        <Route
          exact
          path="/springbootfunctions"
          element={<SpringBootFunctions />}
        ></Route>
        <Route
          exact
          path="/reactstatesandhooks"
          element={<ReactStateHooks />}
        ></Route>
        <Route
          exact
          path="/javafxenvironment"
          element={<JavaFXEnvironment />}
        ></Route>
      </Routes>
    </main>
  );
}

export default Home;
