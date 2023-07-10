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
import { CourseType, TransformedCourseType } from "@/app/types/_types";
import { notFound } from "next/navigation";
type PageProps = {
  params: {
    slug: string;
  };
};

async function getCourseDetail(slug: string) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_DEVELOPMENT_URL + "/api/course/" + slug,
    { method: "GET", cache: "no-cache" }
  );
  if (!res.ok) {
    throw new Error("Something went wrong");
  }


  return await res.json();
}

export default async function page({ params }: PageProps) {
  const courseSlug = params?.slug;
  const courseData: TransformedCourseType = await getCourseDetail(courseSlug);
  const [course] = await Promise.all([courseData]);

  if (!course) {
   notFound()
  }

  return (
    <AnimatedRoute>
      <Box sx={{ p: { xs: "10px 25px", md: "20px 50px" } }}>
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
              {course?.courseTitle}
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
            <CourseTag
              coursePrice={course?.coursePrice}
              duration={course?.duration}
              method={course?.isOnline}
              category={course?.category}
              img={course?.imageSrc}
            />
          </Grid>

          {/* course description */}
          <CourseDesc description={course?.description} />
          <Objectives objectives={course?.learningObj} />
          <Perquisite prerequisites={course?.prerequisites} />
          <Audience target={course?.targetAud} />
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
          <CourseTag
            coursePrice={course?.coursePrice}
            duration={course?.duration}
            method={course?.isOnline}
            category={course?.category}
            img={course?.imageSrc}
          />
        </Grid>
      </Grid>
      </Box>
    </AnimatedRoute>
  );
}
