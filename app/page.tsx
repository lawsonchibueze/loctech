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
import axios from "axios";
import { useSession } from "next-auth/react";

async function getHero() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_DEVELOPMENT_URL + "/api/hero",
    { method: "GET", cache: "no-cache" }
  );
  if (!res.ok) {
    throw new Error("Something occured");
  }
  return await res.json();
}

async function getCourses() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_DEVELOPMENT_URL + "/api/course",
    { method: "GET", cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Something occured");
  }
  return await res.json();
}

export default async function Home() {
  const heroData = await getHero();
  const coursesData = await getCourses();

  const [hero, courses] = await Promise.all([heroData, coursesData]);

  // console.log(courses)
  return (
    <AnimatedRoute>
      <Hero data={hero} />
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
          />
        </Grid>
        <Grid xs={12} md={6} item>
          <Card
            title="Visit our online courses"
            subtitle="New Certificates"
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
        <FeaturedItem courses={courses} />
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
        />
        <SubjectCard
          src="https://loctech-web-app.vercel.app/_next/image?url=%2Fcategory%2FDesignSpecialist.jpg&w=640&q=75"
          alt="courses"
          title="Computer Aided Design - Graphics"
        />
        <SubjectCard
          src="https://loctech-web-app.vercel.app/_next/image?url=%2Fcategory%2FofficeProductivity.jpg&w=640&q=75"
          alt="courses"
          title="Office Productivity"
        />
        <SubjectCard
          src="	https://loctech-web-app.vercel.app/_next/image?url=%2Fcategory%2FDataScientist.jpg&w=640&q=75"
          alt="courses"
          title="Data Science"
        />
        <SubjectCard
          src="	https://loctech-web-app.vercel.app/_next/image?url=%2Fcategory%2FcloudComputing.jpg&w=640&q=75"
          alt="courses"
          title="Cloud Computing"
        />
      </Grid>
      <Newsletter />
    </AnimatedRoute>
  );
}
