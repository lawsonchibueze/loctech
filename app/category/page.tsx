import { promises } from "dns";
import React from "react";
import { Box, Grid } from "../lib/mui";
import FeaturedItem from "../components/Featured/FeaturedItem";
import { TransformedCourseType } from "../types/_types";
import AnimatedRoute from "../components/AnimatedRoute";

interface PageProps {
  searchParams: {
    category: string;
  };
}

async function getCourses() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_DEVELOPMENT_URL + "/api/course",
    { method: "GET", cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Something occured");
  }
  return await res.json();
}

export default async function page({ searchParams }: PageProps) {
  const category = searchParams.category;
  const courseData: TransformedCourseType[] = await getCourses();
  const [course] = await Promise.all([courseData]);

  const filterCourse = course.filter((item) => item.category === category);
  console.log("wertyuiopbnm", filterCourse);
  return (
    <AnimatedRoute>
      <Box sx={{ p: { xs: "10px 25px", md: "20px 50px" } }}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          spacing={{ xs: 2, md: 3 }}
          // columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <FeaturedItem courses={filterCourse} />
        </Grid>
      </Box>
    </AnimatedRoute>
  );
}

// DATA_SCIENCE
