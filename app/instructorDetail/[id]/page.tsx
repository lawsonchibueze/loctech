export const dynamic = "force-dynamic"; // this is the fix
"use client"
import AnimatedRoute from "@/app/components/AnimatedRoute";
import StarRating from "@/app/components/Rating";
import { Box, Grid, IconButton, Typography } from "@/app/lib/mui";
import { InstructorType } from "@/app/types/_types";
import Image from "next/image";
import Twitter from "@mui/icons-material/Twitter";
import Linkdeln from "@mui/icons-material/LinkedIn";
import Facebook from "@mui/icons-material/FacebookOutlined";
import Instagram from "@mui/icons-material/Instagram";
import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

import CustomButton from "@/app/components/Button";
import { notFound, useRouter } from "next/navigation";

async function getInstructorDetail(slug: string) {
  const res = await fetch(`/api/instructors/${slug}`, {
    method: "GET",
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return await res.json();
}

export default async  function page() {
  const params = useParams();
  const instructorID = params.id!;
 
  const router = useRouter();

  const instructor: InstructorType = await getInstructorDetail(
    instructorID
  );
//   const [instructor] = await Promise.all([instructorData]);

  console.log(instructor);
  if (!instructorID) {
    notFound();
  }

  const DeleteCourse = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const res = await fetch("/api/instructors/" + instructorID, {
      method: "DELETE",
      cache: "no-cache",
    });
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    router.back();
  };
  return (
    <AnimatedRoute>
      <Box sx={{ p: { xs: "10px 25px", md: "20px 50px" } }}>
        <Grid container justifyContent="center">
          <Image
            src="/profile.png"
            alt="courseimage"
            width={200}
            height={150}
            style={{
              width: "150px",
              height: "150px",
              objectFit: "cover",
              borderTopRightRadius: "8px",
              borderTopLeftRadius: "8px",
            }}
          />
        </Grid>
        <Grid container justifyContent="center" margin="15px 0">
          <Typography variant="h2" fontWeight="bold">
            {" "}
            {instructor.name}
          </Typography>
        </Grid>
        <Grid
          container
          justifyContent="center"
          margin="15px 0"
          flexDirection="column"
          alignItems="center"
        >
          <Typography variant="h3" fontWeight="bold">
            {" "}
            {instructor.rating}
          </Typography>
          <StarRating rating={instructor.rating!} />
        </Grid>
        <Grid container textAlign="left" margin="20px 0">
          <Typography variant="h4"> {instructor.bio}</Typography>
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          columnGap={5}
        >
          <IconButton>
            <Link href={instructor.twitter!}>
              <Twitter />
            </Link>
          </IconButton>
          <IconButton>
            <Link href={instructor.linkedin!}>
              <Linkdeln />
            </Link>
          </IconButton>{" "}
          <IconButton>
            <Link href={instructor.instagram!}>
              <Instagram />
            </Link>
          </IconButton>{" "}
          <IconButton>
            <Link href={instructor.facebook!}>
              <Facebook />
            </Link>
          </IconButton>
        </Grid>

        <Grid
          container
          item
          columnSpacing={{ xs: 3, md: 5 }}
          rowSpacing={1}
          mt="2rem "
        >
          <CustomButton
            title="Delete Course"
            onClick={DeleteCourse}
            sx={{
              backgroundColor: "#ff539c",
              fontWeight: "bold",
              fontSize: "18px",
              color: "#fff",
              m: "0 15px",
            }}
          />

          {/* <Link href={`forms/uploadcourse?slug=${courseSlug}`}>
                <CustomButton
                  title="Update Course"
                  sx={{
                    backgroundColor: "#ff539c",
                    fontWeight: "bold",
                    fontSize: "18px",
                    color: "#fff",
                    m: "0 15px",
                  }}
                />
              </Link> */}
        </Grid>
      </Box>
    </AnimatedRoute>
  );
}
