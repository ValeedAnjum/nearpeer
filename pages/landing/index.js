import React from "react";
import LandingPageCom from "../../src/components/landingPage/LandingPage";

export const getStaticProps = async () => {
  const courses = await fetch("http://localhost:4000/courses");
  const data = await courses.json();

  return {
    props: {
      courses: data,
    },
  };
};
const LandingPage = ({ courses }) => {
  return (
    <>
      <LandingPageCom courses={courses} />
    </>
  );
};

export default LandingPage;
