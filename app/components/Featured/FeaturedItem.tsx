import { featuredCourseArr } from "@/app/utils/Data";
import React from "react";
import FeaturedCard from "./FeaturedCard";

export default function FeaturedItem() {
  return (
    <>
      {featuredCourseArr.map((course) => (
        <FeaturedCard
          key={course.id}
          id={course.id}
          img={course.img}
          level={course.level}
          title={course.title}
          author={course.author}
          price={course.price}
        />
      ))}
    </>
  );
}
