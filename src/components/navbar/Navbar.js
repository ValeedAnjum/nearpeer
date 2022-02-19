import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Link from "next/link";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles(() => {
  return {
    appbar: {
      backgroundColor: "red",
    },
  };
});
export default function ButtonAppBar(props) {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Link href="/a">
            <Button color="inherit">CATEGORY A</Button>
          </Link>
          <Button color="inherit">CATEGORY B</Button>
          <Button color="inherit">CATEGORY C</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
