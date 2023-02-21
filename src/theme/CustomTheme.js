import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#6a4d57",
      light: "#e7d7d5",
      dark: "#301934",
    },
    secondary: {
      main: "#f9b841",
      light: "#FAF9F6",
      dark: "#13070C",
    },
  },
  typography: {
    main: "Playfair Display",
    secondary: "Varela Round",
    padding: {
      main: "1rem",
    },
  },
});
