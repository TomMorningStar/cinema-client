import React, { useState } from "react";
import Seans from "../seans/Seans";
import styles from "./Cards.module.css";

const Card = () => {
  const [seanesModal, setSeanesModal] = useState(false);
  return (
    <div className={styles.card}>
      <div className={styles.backroundImgWrap}>
        <div className={styles.cardImg}>
          <div className={styles.year}>16+</div>
        </div>
      </div>

      <div className={styles.filmTitle}>Смерть наa ниле</div>
      <div className={styles.genresWrap}>
        <div className={styles.genres}>триллер</div>
        <div className={styles.genres}>криминал</div>
        <div className={styles.genres}>драма</div>
      </div>
      <div className={styles.seanses}>Сеансы на Сегодня</div>
      {seanesModal && <Seans />}
    </div>
  );
};

export default Card;
