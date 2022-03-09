import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import LocalDrawer from "./LocalDrawer";
import Link from "next/link";
const useStyles = makeStyles(() => {
  return {
    appbar: {
      backgroundColor: "rgb(22, 185, 214)",
      borderBottom: "2px solid #16b9d6",
    },
    medExamHeading: {
      cursor: "pointer",
    },
  };
});
export default function Navbar() {
  const classes = useStyles();
  const [flags, setFlags] = useState({ drawerToggle: false });
  return (
    <Box>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setFlags((pre) => ({ ...pre, drawerToggle: true }))}
          >
            <MenuIcon />
          </IconButton>
          <Grid container>
            <Grid container alignItems="center" item sm={9}>
              <Link href="/landing">
                <Typography className={classes.medExamHeading}>
                  Med Exams
                </Typography>
              </Link>
              <Link href="/landing">
                <Button color="inherit">Home</Button>
              </Link>
              <Link href="/blog">
                <Button color="inherit">Blog</Button>
              </Link>
              <Link href="/about">
                <Button color="inherit">About</Button>
              </Link>
            </Grid>
            <Grid item alignItems="center">
              <Button color="inherit">+923016405051</Button>
              <Button color="inherit">Join Us</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <LocalDrawer flags={flags} setFlags={setFlags} />
    </Box>
  );
}
