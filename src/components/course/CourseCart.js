import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import React from "react";

const useStyles = makeStyles(() => {
  return {
    courseCart: {
      "&:hover": {
        transform: "scale(1.01)",
        transition: "0.2s",
      },
    },
  };
});

const CourseCart = ({ course: { title, img, price, id } }) => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.courseCart}
      container
      direction="column"
      sx={{ cursor: "pointer" }}
    >
      <Grid item sx={{ position: "relative", height: "10em" }}>
        <Image src={img} layout="fill" objectFit="cover" />
      </Grid>
      <Grid item>
        <Typography sx={{ color: "black", fontSize: "1.2em" }}>
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography sx={{ color: "#0000008f" }}>{price}</Typography>
      </Grid>
    </Grid>
  );
};

export default CourseCart;
