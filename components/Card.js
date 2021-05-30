import React from 'react';

import styles from './Card.module.css';

function Card() {
  return (
    <div className={styles.Card}>
      <div className={styles.top}>
        <img
          className={styles.img}
          src="https://nicolesaidy.com/images/portfolio/booking-figma/figma-0.jpg"
        ></img>
      </div>
      <div className={styles.bottom}>
        <div className={styles.tags}>DESIGN SYSTEM</div>
        <div className={styles.title}>
          Booking.com: Design system Figma library
        </div>
        <p className={styles.desc}>
          Created and maintaned the design system figma libraries, advocated for
          the design system, trained product teams
        </p>
      </div>
    </div>
  );
}

export default Card;
