export const dynamic = "force-dynamic"; // this is the fix

import React from "react";
import { Grid, Typography, Box } from "../lib/mui";
import AnimatedRoute from "../components/AnimatedRoute";
import Link from "next/link";
import InstructorCard from "../components/Instructor/InstructorCard";
import prisma from "@/prisma/prisma";
import { InstructorType } from "@/app/types/_types";
import InstructorItem from "../components/Instructor/InstructorItem";

async function getInstructor() {
  const instructor = await prisma.instructor.findMany();
  if (!instructor) {
    return null;
  }
  return instructor;
}

export default async function page() {
  const instructorData = await getInstructor();
  const [instructors] = await Promise.all([instructorData]);

  return (
    <AnimatedRoute>
      <Box sx={{ p: { xs: "10px 25px", md: "20px 50px" } }}>
        <Grid container item md={12} justifyContent="center" m="2rem 0">
          <Grid container item justifyContent="space-between">
            <Typography variant="h3" fontWeight="bold">
              Your Instructors
            </Typography>
          </Grid>
          <Grid
            container
            item
            rowSpacing={3}
            columnSpacing={{ xs: 0, md: 3 }}
            m="10px 0"
          >
            <InstructorItem
              instructors={instructors as unknown as InstructorType[]}
            />
          </Grid>
        </Grid>
      </Box>
    </AnimatedRoute>
  );
}
