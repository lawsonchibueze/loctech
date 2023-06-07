import React from "react";
import { Grid, Box, Typography } from "../../lib/mui";
import CourseHeader from "@/app/components/CourseHeader";
import CourseDesc from "@/app/components/CourseDesc";
import Perquisite from "@/app/components/Periquiste";
import Objectives from "@/app/components/Objectives";
import Audience from "@/app/components/Audience";
import Curriculum from "@/app/components/Curriculum";
import CourseTag from "@/app/components/CourseTag";
import AnimatedRoute from "@/app/components/AnimatedRoute";
type PageProps = {
  params?: {
    slug?: string;
  };
};

export default function page({ params }: PageProps) {
  const courseSlug = params?.slug;
  return (
    <AnimatedRoute>
      <CourseHeader slug={courseSlug} />
      <Grid
        container
        columnSpacing={{ xs: 3, md: 5 }}
        rowSpacing={3}
        p="2rem 0"
      >
        <Grid container item xs={12} md={8}>
          <Box>
            <Typography variant="h3" fontWeight="bold">
              {" "}
              Cisco Certified Network Associate
            </Typography>
          </Box>
          <Grid
            container
            item
            xs={12}
            md={4}
            justifyContent="center"
            sx={{ display: { xs: "flex", md: "none" }, mt: "20px" }}
          >
            <CourseTag />
          </Grid>

          {/* course description */}
          <CourseDesc />
          <Objectives />
          <Perquisite />
          <Audience />
          <Curriculum />
        </Grid>

        <Grid
          container
          item
          xs={12}
          md={4}
          justifyContent="center"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <CourseTag />
        </Grid>
      </Grid>
    </AnimatedRoute>
  );
}
