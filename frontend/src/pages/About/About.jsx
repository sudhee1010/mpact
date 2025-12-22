import React from "react";
import styles from "./About.module.css"
function About() {
  return (
    <div>
        <section className={styles.thing1}>
            <h1 className={styles.head}>TASTY TALKS</h1>
            <p className={styles.para}>
              Fuel your workout with high-protein,clean energy bars <br /> made for 
              strength and stamina
            </p>
            </section>
            <section className={styles.card}>
            <div className={styles.card1}></div>
            <div className={styles.card1}></div>
            <div className={styles.card1}></div>
            <div className={styles.card1}></div>
            <div className={styles.card1}></div>
            </section>
            </div>
  );
}
 export default About;
            
 