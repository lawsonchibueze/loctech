"use client";
import React from "react";
import { Box, Typography, Grid, IconButton } from "../../lib/mui";
import Image from "next/image";
import Link from "next/link";
import { FeaturedCourseArrType } from "@/app/types/_types";
import { motion } from "framer-motion";
import { DeleteOutlineOutlined } from "@mui/icons-material";
import { deleteCourse } from "@/app/actions/requests";
import { useSession } from "next-auth/react";
export default function FeaturedCard({
  id,
  img,
  level,
  title,
  author,
  price,
  slug,
  description,
}: FeaturedCourseArrType) {
  const MotionGrid = motion(Grid);
  const { status } = useSession() 
  return (
    <MotionGrid
      whileHover={{ scale: 1.1, marginBottom: "10px" }}
      item
      container
      width="300px"
      xs={12}
      sm={6}
      md={3}
      gridAutoColumns={5}
    >
      <Link href={ status == "unauthenticated" ? "/signIn":`/courseDetail/${slug}`} style={{ width: "100%" }}>
        <Image
          src={img}
          width={500}
          height={500}
          alt="course"
          style={{
            borderRadius: "8px",
            width: "100%",
            height: "300px",
            objectFit: "cover",
          }}
        />
        <Grid container alignItems="flex-start">
          <Grid container item xs={10}>
            <Typography variant="h4" fontWeight="bold" mt="8px">
              {title}
            </Typography>
          </Grid>
        </Grid>
        <p className="line-clamp-2">{description}</p>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Typography fontWeight="bold" variant="h5">
            N {price}
          </Typography>
          <Typography fontWeight="normal">12 weeks</Typography>
        </Grid>
      </Link>
    </MotionGrid>
  );
}
