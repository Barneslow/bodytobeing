import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import styles from "./Testimonial.module.css";
import Feature from "./ui/Feature";
import {
  faChartLine,
  faHomeAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Testimonial = ({ data, open }) => {
  const { imageUrl } = data;

  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
  });

  const options = {
    transform: isInView ? "none" : "translateY(200px)",
    opacity: isInView ? 1 : 0,
    transition: "all 2s ease-in",
  };

  return (
    <motion.div
      className={styles.testimonial}
      onClick={open}
      whileHover={{ scale: 1.1 }}
      ref={ref}
      style={options}
    >
      <div className={styles["listing__content"]}>
        <div className={styles["image-container"]}>
          <img
            className={styles.image}
            alt="real estate mansion"
            src={imageUrl}
          />
        </div>
        <div className={styles["listing__details"]}>
          <div className={styles["listing__type"]}>Upcoming</div>
          <div className={styles["listing__row"]}>
            <span className={styles["listing__price"]}>$90,000</span>
          </div>
          <div className={styles["listing__row"]}>
            <span className={styles["listing__address"]}>
              Street Address: 2071 Second Avenue, Whitehorse, Yukon Canada
            </span>
          </div>
          <div className={styles["listing__row"]}>
            <Feature icon={faUser} color="lightskyblue" iconLabel={24} />
            <Feature icon={faHomeAlt} color="red" iconLabel={4.7} />
            <Feature icon={faChartLine} color="green" iconLabel={3} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonial;
