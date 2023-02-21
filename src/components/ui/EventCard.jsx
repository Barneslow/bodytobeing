import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import EventModal from "./EventModal";
import Testimonial from "../Testminonal";

import styles from "./Modal.module.css";

const EventCard = ({ data }) => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Testimonial data={data} open={openModal} />
      <AnimatePresence>
        {open && (
          <Backdrop onClick={closeModal}>
            <EventModal data={data} close={closeModal} />
          </Backdrop>
        )}
      </AnimatePresence>
    </>
  );
};

const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      className={styles.backdrop}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default EventCard;
