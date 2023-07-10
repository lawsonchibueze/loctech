import React from "react";
import AnimatedRoute from "../components/AnimatedRoute";
import { Box, Grid } from "../lib/mui";
import FeaturedItem from "../components/Featured/FeaturedItem";
import { CourseType } from "../types/_types";
import { notFound } from "next/navigation";

async function getCourseDetail() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_DEVELOPMENT_URL + "/api/course/",
    { method: "GET", cache: "no-cache" }
  );
  if (!res.ok) {
    throw new Error("Something occured");
  }
  return await res.json();
}

export default async function page() {
  const courseData: CourseType[] = await getCourseDetail();
  const [courses] = await Promise.all([courseData]);



  return (
    <AnimatedRoute>
      <Box sx={{ p: { xs: "10px 25px", md: "20px 50px" } }}>
        <Grid
          container
          columnSpacing={{ xs: 3, md: 5 }}
          rowSpacing={3}
          p="2rem 0"
        >
          <FeaturedItem courses={courses} />
        </Grid>
      </Box>
    </AnimatedRoute>
  );
}
