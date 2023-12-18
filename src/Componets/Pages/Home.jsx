import React from "react";
import styles from '../Styles/Home.module.css'
export default function Home(){
    return(
        <div className={styles.Home}>
            <div className={styles.fitness}>
                <div className={styles.top}>
                Stronger Every Day
                </div>
                <div className={styles.bottom}>
                Train your body, free your mind, and elevate your spirit through each workout session."
"Embrace the burn, celebrate the sweat, and conquer your goals with every workout."
"Every rep, every lift, every step - a journey towards strength, health, and self-discovery.
                </div>
            </div>

            <div className={styles.fitness}>
                <div className={styles.top}>
                Younger Every Day
                </div>
                <div className={styles.bottom}>
                Regular physical activity is an essential cornerstone of a healthy lifestyle. Exercise isn't merely about lifting weights or running miles; it's a holistic practice that nourishes the mind, body, and spirit. It's a journey of self-discovery, resilience-building, and constant growth
                </div>
            </div>
        </div>
    )
}