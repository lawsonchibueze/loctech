import React from "react";
import AnimatedRoute from "../components/AnimatedRoute";
import { Box, Grid } from "../lib/mui";
import FeaturedItem from "../components/Featured/FeaturedItem";
import { CourseType } from "../types/_types";
import { notFound } from "next/navigation";
import prisma from "@/prisma/prisma";

async function getCourses() {
  const courses = await prisma.course.findMany();
  return courses;
}

export default async function page() {
  const courseData = await getCourses();
  console.log(courseData);

  return (
    <AnimatedRoute>
      <Box sx={{ p: { xs: "10px 25px", md: "20px 50px" } }}>
        <Grid
          container
          columnSpacing={{ xs: 3, md: 5 }}
          rowSpacing={3}
          p="2rem 0"
        >
          <FeaturedItem courses={courseData as unknown as CourseType[]} />
        </Grid>
      </Box>
    </AnimatedRoute>
  );
}
