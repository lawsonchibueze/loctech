import React from "react";
import { Grid, Box, Typography } from "../lib/mui";
import { tokens } from "../lib/theme";

interface CourseHeaderProp {
  slug?: string;
}

export default function CourseHeader({ slug }: CourseHeaderProp) {
  return (
    <Box mt="2rem">
      <Typography variant="h5">Home / courses / {slug}</Typography>
    </Box>
  );
}
