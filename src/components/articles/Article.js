import  {React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SemanticResponsivity from "./SemanticResponsivity";
import SideBar from "../layout/SideBar";
import styles from "./Article.module.css";

function Article() {
  const {page} = useParams();
  const [currentPage, setCurrentPage] = useState(page);

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  const renderComponent = (componentName) => {
    switch (componentName) {
      case "semanticresponsivity":
        return <SemanticResponsivity />;
        
      default:
        return <div>Invalid component</div>;
    }
  };

  return (
    <section className={styles.body}>
      <main className={styles.main}>
        {renderComponent(currentPage)}
      </main>
      <nav className={styles.sidebar}>
        <SideBar />
      </nav>
    </section>
  );
}

export default Article;
