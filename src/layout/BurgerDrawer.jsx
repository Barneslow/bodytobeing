import {
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/system";

const BurgerDrawer = ({ pages }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();

  console.log(theme.mixins);

  return (
    <>
      <Drawer
        anchor="top"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <div style={{ height: theme.mixins.toolbar.minHeight }}></div>
        <List>
          {pages.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </>
  );
};

export default BurgerDrawer;
