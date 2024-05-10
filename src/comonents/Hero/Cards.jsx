import React from "react";
import styles from "../Hero/Hero.module.css";

const Cards = (props) => {
  const cardData = props.data;
  return (
    <div style={{ background: "rgb(12, 35, 35)" }}>
      <div className={styles.agFormatContainer}>
        <div className={styles.agCoursesBox}>
          <div className={styles.agCoursesItem}>
            <a className={styles.agCoursesItemLink}>
              <div className={styles.agCoursesItemBg}></div>

              <div className={styles.agCoursesItemTitle}>
                {cardData.cardTitle}
              </div>

              <div
                className={`${styles.agCoursesItemDateBox} ${styles.agCoursesItemDate}`}
              >
                {cardData.cardDes}
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
