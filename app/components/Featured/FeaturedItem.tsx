export const dynamic = "force-dynamic"; // this is the fix

import React from "react";
import FeaturedCard from "./FeaturedCard";
import Link from "next/link";
import { CourseType } from "@/app/types/_types";
import { formatPrice } from "@/app/utils/formatPrice";
import { Grid, Typography } from "@/app/lib/mui";


interface FeaturedItemProps {
  courses: CourseType[];
}

export default function FeaturedItem({ courses }: FeaturedItemProps) {
  return (
    <>
      {courses.length === 0 ? (
        <Grid container item justifyContent="center">
          {" "}
          <Typography variant="h3"> Empty course </Typography>
        </Grid>
      ) : (
        courses.map((course) => (
          <FeaturedCard
            key={course.id}
            id={course?.id}
            img={course?.imageSrc}
            description={course?.description}
            // level={course.level}
            title={course?.courseTitle}
            slug={course?.courseSlug}
            // author={course.Instructor.}
            price={formatPrice(course?.coursePrice)}
          />
        ))
      )}
    </>
  );
}
