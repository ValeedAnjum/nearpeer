import { Grid, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import CategoryCart from "./CategoryCart";
const useStyles = makeStyles(() => {
  const theme = useTheme();
  // console.log(theme.breakpoints.down('sm'));
  return {
    landingPage: {
      backgroundColor: "#16b9d6",
      height: "100vh",
      flexWrap: "nowrap",
      [theme.breakpoints.down("sm")]: {
        height: "auto",
      },
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
const LandingPage = ({ courses }) => {
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
          <Grid
            item
            container
            sm={10}
            xs={12}
            justifyContent="center"
            spacing={1}
          >
            {courses &&
              courses.length > 0 &&
              courses.map((course) => {
                return (
                  <Grid item sm={3} xs={11} key={course.id}>
                    <CategoryCart course={course} />
                  </Grid>
                );
              })}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
