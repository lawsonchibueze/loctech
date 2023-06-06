"use client";
import React from "react";
import { Box, Typography, Grid } from "../../lib/mui";
import Image from "next/image";
import Link from "next/link";
import { FeaturedCourseArrType } from "@/app/types/_types";
import { motion } from "framer-motion";
export default function FeaturedCard({
  id,
  img,
  level,
  title,
  author,
  price,
}: FeaturedCourseArrType) {
  const MotionGrid = motion(Grid);

  return (
    <MotionGrid
      whileHover={{ scale: 1.1, marginBottom:"10px" }}
      item
      container
      width="300px"
      xs={12}
      sm={6}
      md={3}
      gridAutoColumns={5}
    >
      <Link href={`/courseDetail/${id}`} style={{ width: "100%" }}>
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
        <Typography variant="h4" fontWeight="bold" mt="8px">
          {title}
        </Typography>
        <Typography variant="h6" m="8px 0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum q
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Typography fontWeight="bold" variant="h5">
            {price}
          </Typography>
          <Typography fontWeight="normal">12 weeks</Typography>
        </Grid>
      </Link>
    </MotionGrid>
  );
}
