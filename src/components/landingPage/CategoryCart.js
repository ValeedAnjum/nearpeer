import { Grid } from "@mui/material";
import Link from "next/link";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles(() => {
  return {
    CategoryCart: {
      backgroundColor: "white",
      padding: "1rem",
      borderRadius: "2px",
      overflow: "hidden",
      height: "100%",
      justifyContent: "space-evenly",
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
const CategoryCart = ({
  course: { name, description, noOfCourses, enrollments },
}) => {
  const classes = useStyles();
  return (
    <Link href={name.toLowerCase().split(" ").join("")}>
      <Grid container direction="column" className={classes.CategoryCart}>
        <Grid item className={classes.cartHeading}>
          {name}
        </Grid>
        <Grid item className={classes.cartParagraph}>
          {description}
        </Grid>
        <Grid item container direction="row">
          <Grid
            className={classes.infoHeading}
            item
            sm={6}
            container
            direction="column"
          >
            <Grid item>{noOfCourses}</Grid>
            <Grid item>COURSES</Grid>
          </Grid>
          <Grid
            className={classes.infoHeading}
            item
            sm={6}
            container
            direction="column"
          >
            <Grid item>{enrollments}</Grid>
            <Grid item>ENROLLMENTS</Grid>
          </Grid>
        </Grid>
      </Grid>
    </Link>
  );
};

export default CategoryCart;
