import { featuredCourseArr } from "@/app/utils/Data";
import React from "react";
import FeaturedCard from "./FeaturedCard";
import Link from "next/link"
import { CourseType } from "@/app/types/_types";

interface FeaturedItemProps{
  courses : CourseType[]
}


export default function FeaturedItem({courses}:FeaturedItemProps) {
  const filteredCourses = courses.filter(course =>  Boolean(course.isFeatured) === true)
  console.log("filterd course", filteredCourses)
  return (
    <>
      {filteredCourses.map((course) => (
        <FeaturedCard
          key={course.id}
          id={course?.id}
          img={course.imageSrc}
          description={course.description}
          // level={course.level}
          title={course.courseTitle}
          slug={course.courseSlug}
          // author={course.Instructor.}
          price={course.coursePrice}
        />
      ))}
    </>
  );
}
