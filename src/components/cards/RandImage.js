import React, { useEffect, useState } from "react";
import styles from "./RandImage.module.css";

const images = [
  {
    url: "/assets/cardImages/graph.png",
    alt: "Card Imagem"
  },
  {
    url: "/assets/cardImages/graph (1).png",
    alt: "Card Imagem"
  },
  {
    url: "/assets/cardImages/graph (3).png",
    alt: "Card Imagem"
  },
  {
    url: "/assets/cardImages/graph (4).png",
    alt: "Card Imagem"
  },
  {
    url: "/assets/cardImages/graph (5).png",
    alt: "Card Imagem"
  },
  {
    url: "/assets/cardImages/graph (6).png",
    alt: "Card Imagem"
  },
  {
    url: "/assets/cardImages/graph (7).png",
    alt: "Card Imagem"
  },
  {
    url: "/assets/cardImages/graph (8).png",
    alt: "Card Imagem"
  }
];

function RandomImage() {
  const [selectedImage, setSelectedImage] = useState("/assets/cardImages/graph.png");

  useEffect(() => {
    setSelectedImage(images[Math.floor(Math.random() * images.length)]);
  }, []);

  return (
    <img src={selectedImage.url} alt={selectedImage.alt} className={styles.cardImage}/>
  );
}

export default RandomImage;
