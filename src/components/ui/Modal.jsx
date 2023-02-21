import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import EmailForm from "../EmailForm";

import styles from "./Modal.module.css";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const PopupModal = ({ modalOpen, close }) => {
  return (
    <AnimatePresence initial={false} mode="wait">
      {modalOpen && (
        <Backdrop onClick={close}>
          <motion.div
            className={styles.modal}
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <EmailForm close={close} />
            <FontAwesomeIcon
              icon={faClose}
              className={styles.close}
              onClick={close}
            />
          </motion.div>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};

export default PopupModal;

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
