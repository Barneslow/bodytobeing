import React, { useState } from "react";
import Feature from "./Feature";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import {
  faChartLine,
  faClose,
  faHomeAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./EventModal.module.css";

const EventModal = ({ data, close }) => {
  const { imageUrl } = data;

  const modalVariants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
    closed: { opacity: 0 },
  };

  const imageVariants = {
    open: { opacity: 1, y: "0vh" },
    closed: { opacity: 0, y: "-10vh" },
  };

  const modalInfoVariants = {
    open: { opacity: 1, transition: { staggerChildren: 0.2 } },
    closed: { opacity: 0 },
  };

  const modalRowVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "10%" },
  };

  return (
    <motion.div
      className={styles.modal}
      variants={modalVariants}
      initial="closed"
      animate="open"
      onClick={(e) => e.stopPropagation()}
    >
      <motion.img
        className={styles.image}
        alt="real estate mansion"
        src={imageUrl}
        variants={imageVariants}
      ></motion.img>
      <motion.div className={styles.info} variants={modalInfoVariants}>
        <motion.div className={styles.row} variants={modalRowVariants}>
          <span className={styles.price}>$90,000</span>
        </motion.div>
        <motion.div className={styles.row} variants={modalRowVariants}>
          <span className={styles.address}>
            Street Address: 2071 Second Avenue, Whitehorse, Yukon Canada
          </span>
        </motion.div>
        <motion.div className={styles.row} variants={modalRowVariants}>
          <Feature icon={faUser} color="lightskyblue" iconLabel={24} />
          <Feature icon={faHomeAlt} color="red" iconLabel={4.7} />
          <Feature icon={faChartLine} color="green" iconLabel={3} />
        </motion.div>
        <motion.div
          className={styles["modal__description-wrapper"]}
          variants={modalRowVariants}
        >
          <p className={styles.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially u
          </p>
        </motion.div>

        <motion.button
          className={styles["modal__close-wrapper"]}
          whileHover={{ scale: 1.2 }}
          onClick={close}
        >
          <FontAwesomeIcon
            icon={faClose}
            className={styles["modal__close-icon"]}
          />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default EventModal;
