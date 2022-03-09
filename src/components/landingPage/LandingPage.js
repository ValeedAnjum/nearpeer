import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import CategoryCart from "./CategoryCart";
const useStyles = makeStyles(() => {
  return {
    landingPage: {
      backgroundColor: "#16b9d6",
      height: "100vh",
      flexWrap: "nowrap",
    },
    h1: {
      margin: "0",
      color: "white",
      textTransform: "capitalize",
    },
    h2: {
      margin: "0",
      color: "white",
      textTransform: "capitalize",
    },
  };
});
const LandingPage = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.landingPage}>
      <Grid item container direction="column" alignItems="center">
        <h1 className={classes.h1}>Take control of your learning today</h1>
        <h2 className={classes.h2}>
          Study smart and study fast towards a smarter you
        </h2>
      </Grid>
      <Grid item>
        <Grid container justifyContent="center">
          <Grid item container sm={10} justifyContent="center" spacing={1}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((key) => (
              <Grid item sm={3} key={key}>
                <CategoryCart />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
