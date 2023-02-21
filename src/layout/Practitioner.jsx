import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box, Container, useTheme } from "@mui/system";
import { useInView } from "framer-motion";
import { useRef } from "react";

import Deniz from "../assets/images/deniz.jpg";

import styles from "./Practitioner.module.css";

const Practitioner = () => {
  const theme = useTheme();

  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
  });

  const options = {
    opacity: isInView ? 1 : 0,
    transition: "all 1.2s ease-in",
  };

  return (
    <section id="About" ref={ref} style={options}>
      <Container
        sx={{
          minHeight: "80vh",
          alignItems: "center",
          display: "flex",
          marginBlock: "3rem",
        }}
      >
        <Grid
          container
          spacing={2}
          direction={{ xs: "column", md: "row" }}
          sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
        >
          <Grid item xs={8}>
            <Typography
              variant="h2"
              sx={{
                color: theme.palette.primary.main,
                fontFamily: theme.typography.main,
                fontWeight: "bold",
                padding: "1rem 0",
                fontSize: "var(--title-size)",
              }}
            >
              Your Practitioner
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: theme.palette.primary.main,
                fontFamily: theme.typography.main,
                fontWeight: "bold",
                padding: "1rem 0",
                fontSize: "var(--subtitle-size)",
              }}
            >
              Deniz Liebert
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontFamily: theme.typography.secondary,
                color: theme.palette.secondary.dark,
                lineHeight: 1.8,
                paddingBlock: theme.typography.padding.main,
                fontSize: "var(--text-size)",
              }}
            >
              Deniz realized her dream of becoming a Certified Yoga Teacher
              (200H RYT) almost a decade ago in Rishikesh, India. She then went
              on to study under a venerated Thai Massage teacher in Northern
              Thailand, expanding her skillset and knowledge deeper into the
              tissues.
              <br />
              <br />
              Upon returning to Sweden, she decided to become a Licensed
              Physiotherapist, combining her holistic knowledge of the body with
              Eastern and Western techniques.
              <br />
              <br />
              Deniz uses her scientific understanding of the body and her yoga
              expertise to safely guide people back to their authentic selves,
              helping them heal physical, emotional, and mental imbalances.
              Breath work, alignment, and meditation are central to her classes,
              which are taught in English and Swedish.
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 0,
              }}
            >
              <img src={Deniz} className={styles.image} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Practitioner;
