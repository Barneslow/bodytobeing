import Navigation from "./layout/Navigation";

import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/CustomTheme";
import Home from "./layout/Home";
import Description from "./layout/Description";
import Services from "./layout/Services";
import ServiceSlider from "./components/ServiceSlider";
import Practitioner from "./layout/Practitioner";
import useModal from "../hooks/useModal";
import Modal from "./components/ui/Modal";
import Events from "./layout/Events";

function App() {
  const { open, modalOpen, close } = useModal();

  return (
    <ThemeProvider theme={theme}>
      <Modal modalOpen={modalOpen} close={close} />
      <Navigation open={open} />
      <Home />
      <Description />
      <Services />
      <ServiceSlider />
      <Practitioner />
      <Events />
    </ThemeProvider>
  );
}

export default App;
