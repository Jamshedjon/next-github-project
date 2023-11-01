"use client";
import { useState, useEffect } from "react";
import CourseSearch from "./components/CourseSearch";
import Courses from "./components/Courses";
import Loading from "./loading";

function HomePage() {
  const [courses, setCourses] = useState(null);
  const [isPending, setIsPanding] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const req = await fetch("/api/courses");
      const data = await req.json();
      setCourses(data);
      setIsPanding(false);
    };
    getData();
  }, []);
  if (isPending) {
    return <Loading />;
  }

  return (
    <div>
      <h1>Welcome to the courses.</h1>
      <CourseSearch setCourses={setCourses} />
      <Courses courses={courses} />
      {/*  */}
    </div>
  );
}

export default HomePage;
