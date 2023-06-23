import React from "react";
import { Grid, Typography } from "../../lib/mui";
import AnimatedRoute from "../../components/AnimatedRoute";
import Link from "next/link";
import InstructorCard from "../../components/InstructorCard";
export default function page() {
  return (
    <AnimatedRoute>
      <Grid container item md={12} justifyContent="center" m="2rem 0">
        <Grid container item justifyContent="space-between">
          <Typography variant="h3" fontWeight="bold">
            Your Instructors
          </Typography>
       
        </Grid>
        <Grid container item rowSpacing={3} columnSpacing={{ xs: 0, md: 3 }} m="10px 0">
          <InstructorCard />
          <InstructorCard />
          <InstructorCard />
          <InstructorCard />
          <InstructorCard />
          <InstructorCard />
          <InstructorCard />
          <InstructorCard />

        </Grid>
      </Grid>
    </AnimatedRoute>
  );
}
