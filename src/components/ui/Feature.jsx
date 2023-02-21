import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Feature.module.css";

const Feature = ({ icon, iconLabel, color }) => {
  return (
    <div className={styles.feature}>
      <div className={styles["feature__circle"]}>
        <FontAwesomeIcon
          className={styles["feature__icon"]}
          icon={icon}
          style={{ color }}
        />
      </div>
      <span className={styles["feature__label"]}>{iconLabel}</span>
    </div>
  );
};

export default Feature;
