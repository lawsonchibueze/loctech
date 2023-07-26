export const dynamic = "force-dynamic"; // this is the fix

import Image from "next/image";
import { Box, Grid } from "./lib/mui";
import Hero from "./components/Hero";
import Card from "./components/Card";
import FeatureHeader from "./components/FeatureHeader";
import FeaturedItem from "./components/Featured/FeaturedItem";
import PathCard from "./components/PathCard";
import SubjectCard from "./components/Subjects/SubjectCard";
import Newsletter from "./components/Newsletter";
import AnimatedRoute from "./components/AnimatedRoute";
import { CourseType } from "./types/_types";
import prisma from "@/prisma/prisma";
async function getHero() {
  const hero = await prisma.hero.findMany();

  return hero;
}

async function getCourses() {
  const courses = await prisma.course.findMany();
  return courses;
}

export default async function Home() {
  const heroData = await getHero();

  const courses = await getCourses();
  const filteredCourses = courses.filter(
    (course) => Boolean(course.isFeatured) === true
  ) as unknown as CourseType[]; //featured Courses

  return (
    <AnimatedRoute>
      <Box sx={{ p: { xs: "10px 25px", md: "20px 50px" } }}>
        <Hero data={heroData} />
        <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 2, sm: 2, md: 2 }}
          sx={{
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            mt: "20px",
          }}
        >
          <Grid xs={12} md={6} item>
            <Card
              title="Visit our classroom courses"
              subtitle="New Certificates"
              btnText="View More courses"
              initialX="-100vw"
              link = "/offline-courses"
            />
          </Grid>
          <Grid xs={12} md={6} item>
            <Card
              title="Visit our online courses"
              subtitle="New Certificates"
              btnText="Find Out More"
              initialX="100vw"
              link = "/online-courses"
            />
          </Grid>
        </Grid>
        <FeatureHeader title="Explore Featured Courses" />
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          spacing={{ xs: 2, md: 3 }}
          // columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <FeaturedItem courses={filteredCourses} />
        </Grid>

        <Grid container justifyContent="center" m="3rem 0">
          <PathCard />
        </Grid>

        <FeatureHeader title="Browse Subjects" />
        <Grid
          container
          justifyContent="space-between"
          rowSpacing={{ xs: 1, sm: 2 }}
        >
          <SubjectCard
            src="https://loctech-web-app.vercel.app/_next/image?url=%2Fcategory%2FsoftwareEngineer.jpg&w=640&q=75"
            alt="courses"
            title="Software Engineering"
            params="CODING"
          />
          <SubjectCard
            src="https://loctech-web-app.vercel.app/_next/image?url=%2Fcategory%2FDesignSpecialist.jpg&w=640&q=75"
            alt="courses"
            title="Computer Aided Design - Graphics"
            params="GRAPHICS"
          />
          <SubjectCard
            src="https://loctech-web-app.vercel.app/_next/image?url=%2Fcategory%2FofficeProductivity.jpg&w=640&q=75"
            alt="courses"
            title="Office Productivity"
            params="OFFICE_PRODUCTIVITY"
          />
          <SubjectCard
            src="	https://loctech-web-app.vercel.app/_next/image?url=%2Fcategory%2FDataScientist.jpg&w=640&q=75"
            alt="courses"
            title="Data Science"
            params="DATA_SCIENCE"
          />
          <SubjectCard
            src="	https://loctech-web-app.vercel.app/_next/image?url=%2Fcategory%2FcloudComputing.jpg&w=640&q=75"
            alt="courses"
            title="Cloud Computing"
            params="NETWORKING"
          />
        </Grid>
        <Newsletter />
      </Box>
    </AnimatedRoute>
  );
}
