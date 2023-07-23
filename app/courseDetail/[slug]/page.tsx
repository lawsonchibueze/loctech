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
import prisma from "@/prisma/prisma";
type PageProps = {
  params: {
    slug: string;
  };
};

async function getCourseDetail(slug: string) {
  const course = await prisma.course.findUnique({
    where: {
    courseSlug: slug
    },
  });

  if (!course) {
    return null;
  }

  return course;
}

export default async function page({ params }: PageProps) {
  const courseSlug = params?.slug;
  const courseData= await getCourseDetail(courseSlug);
  // const [course] = await Promise.all([courseData]);

  if (!courseData) {
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
              {courseData?.courseTitle}
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
              coursePrice={courseData?.coursePrice}
              duration={courseData?.duration!}
              method={courseData?.isOnline as unknown as string}
              category={courseData?.category}
              img={courseData?.imageSrc}
            />
          </Grid>

          {/* course description */}
          <CourseDesc description={courseData?.description} />
          <Objectives objectives={courseData?.learningObj} />
          <Perquisite prerequisites={courseData?.prerequisites} />
          <Audience target={courseData?.targetAud} />
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
            coursePrice={courseData?.coursePrice}
            duration={courseData?.duration !}
            method={courseData?.isOnline as unknown as string}
            category={courseData?.category}
            img={courseData?.imageSrc}
          />
        </Grid>
      </Grid>
      </Box>
    </AnimatedRoute>
  );
}
