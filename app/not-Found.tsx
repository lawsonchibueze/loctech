import React from "react";
import { Box, Grid, Typography } from "./lib/mui";
import AnimatedRoute from "./components/AnimatedRoute";

export default function NotFound() {
  return (
    <AnimatedRoute>
      <Box sx={{ p: { xs: "10px 25px", md: "20px 50px" } }}>
        <Grid container justifyContent="center">
          <Typography variant="h3" fontWeight="bold">
            {" "}
            Course does not exist
          </Typography>
        </Grid>
      </Box>
    </AnimatedRoute>
  );
}
