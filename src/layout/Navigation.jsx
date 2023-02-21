import {
  AppBar,
  Toolbar,
  Icon,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";
import logo from "../assets/bodytobeinglogo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box } from "@mui/system";

import styles from "./Navigation.module.css";
import { useState } from "react";
import BurgerDrawer from "./BurgerDrawer";

const pages = ["Home", "About", "Services", "Contact", "Events"];

const Navigation = ({ open }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AppBar
      sx={{
        position: "fixed",
        zIndex: theme.zIndex.drawer + 1,
        background: "rgba(0, 0, 0, .4)",
        boxShadow: "none",
      }}
    >
      <Toolbar>
        <Icon sx={{ height: "auto", width: 50 }}>
          <img src={logo} style={{ width: "100%", height: "100%" }} />
        </Icon>

        {isMatch ? (
          <>
            <Typography>Body to Being</Typography>
            <BurgerDrawer pages={pages} />
          </>
        ) : (
          <>
            <Tabs
              textColor="secondary"
              value={selectedTab}
              onChange={(e, value) => {
                setSelectedTab(value);
              }}
              indicatorColor="secondary"
            >
              {pages.map((page, index) => (
                <Tab
                  sx={{
                    color: theme.palette.secondary.light,
                    fontFamily: "Varela Round",
                    fontSize: 12,
                  }}
                  key={index}
                  label={page}
                  onClick={() => {
                    if (page === "Contact") {
                      open();
                      return;
                    }

                    document.getElementById(page).scrollIntoView({
                      behavior: "auto",
                      block: "center",
                      inline: "center",
                    });
                  }}
                />
              ))}
            </Tabs>
            <Box
              className={styles.instagram}
              sx={{
                marginLeft: "auto",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              <InstagramIcon sx={{ fontSize: 30 }} />
            </Box>
            <Button
              onClick={open}
              sx={{
                color: "white",
                background: "#6a4d57",
                paddingInline: 7,
                marginLeft: 3,
                transition: "all .5s",
                "&:hover": {
                  color: "black",
                  backgroundColor: "white",
                },
              }}
            >
              Book Now
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
