import { Typography, Box, Button } from "@mui/material";
import { Container, useTheme } from "@mui/system";
import { motion } from "framer-motion";
import styles from "./Home.module.css";

const Home = () => {
  const theme = useTheme();

  const container = {
    initial: {},
    animate: { transition: { staggerChildren: 1, delayChildren: 0.75 } },
  };

  const child = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, type: "ease" },
    },
  };
  return (
    <motion.section
      className={styles.background}
      id="Home"
      variants={container}
      initial="initial"
      animate="animate"
    >
      <Container
        maxWidth="lg"
        sx={{ zIndex: 10, display: "flex", flexDirection: "column", gap: 4 }}
      >
        <Typography
          variant="h3"
          component={motion.div}
          variants={child}
          sx={{
            color: "white",
            fontSize: "var(--title-size)",
            fontFamily: "Playfair Display",
            textTransform: "uppercase",
            fontWeight: "bold",
          }}
        >
          Welcome to body to being
        </Typography>
        <Typography
          component={motion.div}
          variants={child}
          variant="h1"
          sx={{
            color: "white",
            fontSize: "var(--heading-size)",
            fontFamily: "Playfair Display",
            fontWeight: 900,
          }}
        >
          Yoga Therapy &#38; Thai Massage in Stockholm
        </Typography>
        <Typography
          component={motion.div}
          variants={child}
          variant="h5"
          sx={{
            color: "white",
            fontSize: "var(--text-size)",
          }}
        >
          Stockholm’s first center to offer Yoga therapy, Thai massage and
          Conscious connection under one roof.
        </Typography>
        <Typography
          component={motion.div}
          variants={child}
          variant="h5"
          sx={{
            color: "white",
            fontSize: "var(--text-size)",
            fontWeight: 100,
          }}
        >
          Restore balance and achieve optimal health with a Licensed Therapist
          starting today.
        </Typography>
        {/* <Button
          component={motion.button}
          variants={child}
          sx={{
            color: "white",
            border: "1px solid black",
            background: "#6a4d57",
            paddingInline: 7,
            paddingBlock: 1.5,
            transition: "all .5s",
            "&:hover": {
              color: theme.palette.primary.main,
              backgroundColor: "white",
              border: "1px solid white",
            },
          }}
        >
          MEET YOUR PRACTIONER
        </Button> */}
      </Container>
    </motion.section>
  );
};

export default Home;
