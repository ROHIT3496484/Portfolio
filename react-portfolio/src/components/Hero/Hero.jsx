import React from "react";

import styles from "./Hero.module.css";


export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Rohit Rana</h1>
        <p className={styles.description}>
          I'm a Frontend developer with 1.1 years of experience using React and
          JavaScript and Devops Engineer with 1.5 years of experience. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:rohitrana349@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src="/assets/hero/Rounded_me.jpeg"
        height={300} width={300}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
