import React from "react";
import RandomImage from "./RandImage";
import styles from "./Cards.module.css";


function Card(props) {
  return (
    <div className={styles.card}>
      <RandomImage className={styles.randimage} />
      <div className={styles.titleContainer}>
        <p className={styles.cardTitle}>{props.title} </p>
        <p>{props.subject}</p>
      </div>
     
    </div>
  );
}

export default Card;
