import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles(() => {
  return {
    CategoryCart: {
      backgroundColor: "white",
      padding: "1rem",
      borderRadius: "2px",
      "&:hover": {
        backgroundColor: "rgb(7, 177, 77, 0.42)",
        userSelect: "none",
        cursor: "pointer",
        color: "white",
        transition: "0.1s",
        "& > div": {
          color: "white",
          "& > div": {
            color: "white",
          },
        },
      },
    },
    cartHeading: {
      fontSize: "1.5rem",
      color: "green",
    },
    cartParagraph: {
      color: "#00000087",
    },
    infoHeading: {
      fontWeight: "500",
      color: "#000000b0",
    },
  };
});
const CategoryCart = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.CategoryCart}>
      <Grid item className={classes.cartHeading}>
        CA
      </Grid>
      <Grid item className={classes.cartParagraph}>
        Online CA Courses by the best faculty of Pakistan at one place.
      </Grid>
      <Grid item container direction="row">
        <Grid
          className={classes.infoHeading}
          item
          sm={6}
          container
          direction="column"
        >
          <Grid item>66</Grid>
          <Grid item>COURSES</Grid>
        </Grid>
        <Grid
          className={classes.infoHeading}
          item
          sm={6}
          container
          direction="column"
        >
          <Grid item>150718</Grid>
          <Grid item>ENROLLMENTS</Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CategoryCart;
