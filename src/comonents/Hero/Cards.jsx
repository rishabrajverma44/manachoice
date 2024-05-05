import React from "react";
import styles from "../Hero/Hero.module.css";

const Cards = (props) => {
  const cardData = props.data;
  return (
    <div>
      <div className={`col ${styles.card}`}>
        <div class="card">
          <div class={`card-body ${styles.body}`}>
            <h5 class="card-title text-center fw-bold">{cardData.cardTitle}</h5>
            <p class="card-text">{cardData.cardDes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
