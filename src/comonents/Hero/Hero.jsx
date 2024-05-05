import React from "react";
import styles from "../Hero/Hero.module.css";
import leafImage from "../../utils/leaf.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import Cards from "./Cards";

const Hero = () => {
  const cardData = [
    {
      cardTitle: "Fresh Organic Vegetables",
      cardDes:
        "Browse through our selection of fresh, organic vegetables sourced directly from local farms.",
    },
    {
      cardTitle: "Ripe Juicy Fruits",
      cardDes:
        "Discover a variety of ripe and juicy fruits, handpicked to ensure the highest quality and taste.",
    },
    {
      cardTitle: "Groceries and More",
      cardDes:
        "Explore our wide range of groceries, including water, milk, and other essential items, to fulfill all your household needs.",
    },
  ];

  return (
    <div class={styles.hero_main}>
      <div
        className={`d-flex justify-content-center flex-column align-items-center ${styles.leaf}`}
      >
        <img src={leafImage} alt="leafimg" className={styles.leafpng} />
      </div>
      <div className="container fs-1 fw-bolder mt-4">
        <h1 className="text-center fs-2">manaChoice 100%</h1>
        <h1 className="text-center">
          Natural,Organic, and Best Delivery Services
        </h1>
      </div>
      <div>
        <h1 className="text-center fs-6">
          Your all-in-one solution for finding fresh,
        </h1>
        <h1 className="text-center fs-6">
          organic vegetables, fruits, and groceries.
        </h1>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <button class={styles.install_button}>
          <a href="https://play.google.com/store">
            <FontAwesomeIcon icon={faGooglePlay} size="2x" />
          </a>
          <span className="h-100 d-flex align-items-center">Install Now</span>
        </button>
      </div>
      <div className="cards p-4">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {cardData.map((cardData) => (
            <Cards data={cardData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
