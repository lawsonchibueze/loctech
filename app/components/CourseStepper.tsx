import React from "react";
import { Box, Button, Grid, Typography, Select } from "../lib/mui";

interface CourseStepperProps {
  title: string;
  number: number;
}
export default function CourseStepper({ title, number }: CourseStepperProps) {
  return (
    <Grid container alignItems="center" m="1rem 0">
      <Box
        width="50px"
        height="50px"
        borderRadius="50px"
        sx={{
          backgroundColor: "#cc2069",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" color="#fff">
          {" "}
          {number}
        </Typography>
      </Box>

      <Typography variant="h4" m="0 1rem">
        {" "}
        {title}
      </Typography>
    </Grid>
  );
}
