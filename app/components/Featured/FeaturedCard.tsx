"use client";
import React from "react";
import { Box, Typography, Grid, useTheme } from "../../lib/mui";
import { tokens } from "@/app/lib/theme";
import Image from "next/image";
import Link from "next/link"
import { FeaturedCourseArrType } from "@/app/types/_types";
export default function FeaturedCard({
  id,
  img,
  level,
  title,
  author,
  price,
}: FeaturedCourseArrType) {
  return (
    
    <Grid item container  width="300px" xs={12} sm={6} md={3} gridAutoColumns={5}>
      <Link href={`/courseDetail/${id}`} style={{width:"100%"}}>
      <Image
        src={img}
        width={500}
        height={500}
        alt="course"
        style={{ borderRadius: "8px", width:"100%", height:"300px", objectFit:"cover" }}
      />
      <Typography variant="h4" fontWeight="bold" mt="8px">
        {title}
      </Typography>
      <Typography variant="h6" m="8px 0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum q
      </Typography>
      <Grid container direction="row" justifyContent="space-between" alignItems="flex-end">
        <Typography fontWeight="bold" variant="h5">{price}</Typography>
        <Typography fontWeight="normal" >12 weeks</Typography>
      </Grid>
    </Link>
    </Grid>
  );
}
