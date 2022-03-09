import React from "react";
import {
  Drawer,
  List,
  ListItem,
  Toolbar,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import Link from "next/link";
const LocalDrawer = ({ flags, setFlags }) => {
  return (
    <Drawer
      anchor="left"
      open={flags.drawerToggle}
      onClose={() => setFlags((pre) => ({ ...pre, drawerToggle: false }))}
    >
      <Toolbar
        sx={{
          borderBottom: "1px solid #0000001a",
          userSelect: "none",
          cursor: "pointer",
        }}
      >
        Med Exams
      </Toolbar>
      <List sx={{ width: "250px" }}>
        <Link href="/landing">
          <ListItem
            button
            onClick={() => setFlags((pre) => ({ ...pre, drawerToggle: false }))}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link href="/blog">
          <ListItem
            button
            onClick={() => setFlags((pre) => ({ ...pre, drawerToggle: false }))}
          >
            <ListItemIcon>
              <AccountBalanceIcon />
            </ListItemIcon>
            <ListItemText primary="Blog" />
          </ListItem>
        </Link>
        <Link href="/about">
          <ListItem
            button
            onClick={() => setFlags((pre) => ({ ...pre, drawerToggle: false }))}
          >
            <ListItemIcon>
              <WorkIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
};

export default LocalDrawer;
