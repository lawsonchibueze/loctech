"use client";
import React from "react";
import { Grid, Box, Typography } from "../lib/mui";


interface CourseDescProp {
  description : string 
}
export default function CourseDesc({description}:CourseDescProp) {
  return (
    <Grid container item rowSpacing={2} xs={12}>
      <Grid  container item mt="2rem"  xs={12}>
        <Typography variant="h4" fontWeight="bold">
          About this course
        </Typography>
      </Grid>

      <Grid item>
        <Typography variant="h6" fontWeight="normal" fontSize="16px">
         {description}
        </Typography>
      </Grid>
    </Grid>
  );
}
