"use server";
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
import getCurrentUser from "./actions/getCurrentUser";
export default async function Home() {
  const currentUser = await getCurrentUser();

  console.log("user", currentUser);

  return (
    <AnimatedRoute>
      <Hero />
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
            title="Online Courses from Loctech IT Training Institite"
            subtitle="New Certificate"
            btnText="Find Out More"
            initialX="-100vw"
          />
        </Grid>
        <Grid xs={12} md={6} item>
          <Card
            title="Online Courses from Loctech IT Training Institite"
            subtitle="New Certificate"
            btnText="Find Out More"
            initialX="100vw"
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
        <FeaturedItem />
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
          src="/smiling-young-african-college-student-doing-KYGJVRW (1).png"
          alt="courses"
          title="Design"
        />
        <SubjectCard
          src="/smiling-young-african-college-student-doing-KYGJVRW (1).png"
          alt="courses"
          title="Desgn"
        />
        <SubjectCard
          src="/smiling-young-african-college-student-doing-KYGJVRW (1).png"
          alt="courses"
          title="Desgn"
        />
        <SubjectCard
          src="/smiling-young-african-college-student-doing-KYGJVRW (1).png"
          alt="courses"
          title="Desgn"
        />
        <SubjectCard
          src="/smiling-young-african-college-student-doing-KYGJVRW (1).png"
          alt="courses"
          title="Desgn"
        />
      </Grid>
      <Newsletter />
    </AnimatedRoute>
  );
}
