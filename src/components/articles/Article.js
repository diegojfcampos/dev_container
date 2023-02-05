import { useEffect, useState } from "react";
import SemanticResponsivity from "./SemanticResponsivity";
import SideBar from "../layout/SideBar";
import styles from "./Article.module.css";

function Article(props) {
  const [RenderPage, setPage] = useState(null);

  useEffect(() => {
    switch (props.page) {
      case "SemanticResponsivity":
        setPage(SemanticResponsivity);
        break;
      default:
        setPage(null);
    }
  }, [props.page]);

  if (!RenderPage) {
    return null;
  }

  return (
    <section className={styles.body}>
      <main lassName={styles.main}>
        <RenderPage />
      </main>
      <nav lassName={styles.sidebar}>
        <SideBar />
      </nav>
    </section>
  );
}

export default Article;
