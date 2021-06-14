import React from 'react';
import A from './A';

import styles from './Card.module.css';

function Card({ Title, Description, Tags, Img }) {
  return (
    <div className={styles.Card}>
      <div className={styles.top}>
        <img
          className={styles.img}
          src={
            Img
              ? Img
              : 'https://nicolesaidy.com/images/portfolio/booking-figma/figma-0.jpg'
          }
        ></img>
      </div>
      <div className={styles.bottom}>
        <div className={styles.tagSection}>
          {Tags && Tags.map((tag) => <div className={styles.tags}>{tag}</div>)}
        </div>
        {/* <div className={styles.tags}>DESIGN SYSTEM</div> */}
        <div className={styles.title}>
          <A href={`https://${Title}`}>{Title}</A>
          {/* Booking.com: Design system Figma library */}
        </div>
        <p className={styles.desc}>
          {Description}
          {/* Created and maintaned the design system figma libraries, advocated for
          the design system, trained product teams */}
        </p>
      </div>
    </div>
  );
}

export default Card;
