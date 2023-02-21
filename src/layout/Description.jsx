import { Typography } from "@mui/material";
import { Container, useTheme } from "@mui/system";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Description = () => {
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
    <section ref={ref} style={options}>
      <Container
        maxWidth="md"
        sx={{
          textAlign: "center",
          minHeight: "60vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Playfair Display",
            color: theme.palette.primary.main,
            fontWeight: "bold",
            fontSize: "var(--title-size)",
          }}
        >
          The Body Is The Pathway To Liberation
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Varela Round",
            color: "#13070C",
            fontSize: "var(--text-size)",
          }}
        >
          At Body to Being, we believe that your body is capable of self-healing
          when it’s in a state of balance.
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Varela Round",
            color: "#13070C",
            fontSize: "var(--text-size)",
          }}
        >
          Your therapist is dedicated to guide you on your journey to holistic
          wellness combining Yoga, Thai massage and Conscious connection.
        </Typography>
      </Container>
    </section>
  );
};

export default Description;
