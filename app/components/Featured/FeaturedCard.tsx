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
  slug,
  description
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
      <Link href={`/courseDetail/${slug}`} style={{ width: "100%" }}>
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
      <p className="line-clamp-2">
        {description}
      </p>
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
