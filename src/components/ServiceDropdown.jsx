import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import leftArrow from "../assets/left-arrow.svg";

import styles from "./ServiceDropdown.module.css";

const items = [
  {
    title: "Yoga Therapy",
    content:
      "We offer a wide range of yoga classes & yoga nidras that are specifically designed to help you feel more relaxed and stress-free.",
  },
  {
    title: "Thai Massage",
    content:
      "We provide tension and pain relieving Thai massage or a more therapeutic massage, depending on what the client needs.",
  },
  {
    title: "Conscious Connection",
    content:
      "Do you long for a better relationship to yourself or the people around you? Do you feel like you’re not fully seen, or can’t seem to connect with others? We offer a variety of practices designed to help you connect with yourself and your community through Conscious connection.",
  },
];

function Accordion({ item, expanded, setExpanded, index }) {
  const isOpen = index === expanded;
  const theme = useTheme();

  return (
    <>
      <motion.li
        className={styles["list-item"]}
        onClick={() => setExpanded(isOpen ? false : index)}
      >
        <FontAwesomeIcon
          icon={faCircleChevronRight}
          className={styles.icon}
          style={{ transform: isOpen ? "rotate(90deg)" : "" }}
        />
        <Typography
          variant="h4"
          sx={{
            color: theme.palette.primary.main,
            fontFamily: theme.typography.main,
            fontWeight: "bold",
            fontSize: "var(--subtitle-size)",
          }}
        >
          {item.title}
        </Typography>
      </motion.li>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.p
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            style={{ fontFamily: theme.typography.secondary }}
            variants={{
              open: { opacity: 1, height: "auto", overflow: "hidden" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {item.content}
          </motion.p>
        )}
      </AnimatePresence>
    </>
  );
}

const ServiceDropdown = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.ul
      style={{
        listStyle: "none",
      }}
    >
      {items.map((item, index) => (
        <Accordion
          key={index}
          item={item}
          index={index}
          setExpanded={setExpanded}
          expanded={expanded}
        />
      ))}
    </motion.ul>
  );
};

export default ServiceDropdown;
