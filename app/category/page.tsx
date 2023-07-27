export const dynamic = "force-dynamic"; // this is the fix

import React from "react";
import { Box, Grid } from "../lib/mui";
import FeaturedItem from "../components/Featured/FeaturedItem";
import { CourseType, TransformedCourseType } from "../types/_types";
import AnimatedRoute from "../components/AnimatedRoute";
import prisma from "@/prisma/prisma"
interface PageProps {
  searchParams: {
    category: string;
  };
}

async function getCourses() {
  const courses = await prisma.course.findMany();
  if(!courses){
    return null
  }
  return courses;

}

export default async function page({ searchParams }: PageProps) {
  const category = searchParams.category;
  const courseData = await getCourses();
  const [course] = await Promise.all([courseData]);

  const filterCourse = course!.filter((item) => item.category === category);
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
          <FeaturedItem courses={filterCourse as unknown as CourseType[]} />
        </Grid>
      </Box>
    </AnimatedRoute>
  );
}

// DATA_SCIENCE









