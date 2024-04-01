import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Mayank</h1>
        <p className={styles.description}>
        Crafting seamless digital experiences from back-end to front-end, I sculpt code into captivating web solutions. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:mayanktomar431@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.jpeg")}
        alt="Hero image of me"
        className={styles.heroImg}
        style={{ 
            borderRadius: '60px',
            boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
            maxWidth: '100%',
            height: '70vh'
        }}
        
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};