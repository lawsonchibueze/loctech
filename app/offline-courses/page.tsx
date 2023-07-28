export const dynamic = "force-dynamic"; // this is the fix

import React from "react";
import AnimatedRoute from "../components/AnimatedRoute";
import { Box, Grid } from "../lib/mui";
import FeaturedItem from "../components/Featured/FeaturedItem";
import prisma from "@/prisma/prisma";
import { CourseType } from "../types/_types";

async function getCourses() {
  const courses = await prisma.course.findMany();
  return courses;
}

export default async function Page() {
  const courses = await getCourses();
  const [courseArr] = await Promise.all([courses]);

  const onlineCourses = courseArr.filter((course) => course.isOnline === false);
  return (
    <AnimatedRoute>
      <Box sx={{ p: { xs: "10px 25px", md: "20px 50px" } }}>
        <Grid
          container
          columnSpacing={{ xs: 3, md: 5 }}
          rowSpacing={3}
          p="2rem 0"
        >
          <FeaturedItem courses={onlineCourses as unknown as CourseType[]} />
        </Grid>
      </Box>
    </AnimatedRoute>
  );
}
