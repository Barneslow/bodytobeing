import { Box, Container, useTheme } from "@mui/system";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import image from "../assets/images/services.jpg";

import ServiceDropdown from "../components/ServiceDropdown";

import styles from "./Services.module.css";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Services = () => {
  const theme = useTheme();

  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
  });

  const options = {
    opacity: isInView ? 1 : 0,
    transition: "all 2s ease-in",
  };

  return (
    <section
      ref={ref}
      style={options}
      className={styles.container}
      id="Services"
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={2}
          sx={{
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Grid item xs={12} md={4}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: theme.typography.secondary,
                color: theme.palette.primary.main,
                fontWeight: "bold",
                fontSize: "var(--title-size)",
                padding: "1rem 0 ",
              }}
            >
              Services
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontFamily: theme.typography.secondary,
                color: theme.palette.primary.main,
                fontWeight: "bold",
                fontSize: "var(--text-size)",
              }}
            >
              Our mission is to help you live a more authentic and healthier
              life by providing high quality Yoga therapy and Thai massage
              sessions.
            </Typography>
          </Grid>
          <Grid
            container
            item
            md={8}
            sx={{
              flexDirection: {
                xs: "column",
                md: "row",
              },
            }}
          >
            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <img src={image} className={styles.image} />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <ServiceDropdown />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Services;
