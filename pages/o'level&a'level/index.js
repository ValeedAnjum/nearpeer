import { Grid } from "@mui/material";
import React from "react";
import CourseCart from "../../src/components/course/CourseCart";
import { shuffle } from "../../src/resources/util/functions";
export const getStaticProps = async () => {
  const courses = await fetch("http://localhost:4000/subcourses");
  const data = await courses.json();
  shuffle(data);
  return {
    props: {
      courses: data,
    },
  };
};
const index = ({ courses }) => {
  return (
    <Grid container justifyContent="center">
      <Grid item sm={10} container sx={{ marginTop: "1em" }}>
        {courses &&
          courses.length > 0 &&
          courses.map((course) => {
            return (
              <Grid item key={course.id} sm={3} sx={{ padding: "0 16px" }}>
                <CourseCart key={course.id} course={course} />
              </Grid>
            );
          })}
      </Grid>
    </Grid>
  );
};

export default index;
