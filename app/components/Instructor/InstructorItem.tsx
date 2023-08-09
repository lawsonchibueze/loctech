import React from "react";
import InstructorCard from "./InstructorCard";
import { InstructorType } from "@/app/types/_types";
interface InstructorItemType {
  instructors: InstructorType[];
}
export default function InstructorItem({ instructors }: InstructorItemType) {
 console.log("=======",instructors)
    return (
    <>
      {instructors.map((instructor, index) => (
        <InstructorCard
        id={instructor.id!}
          name={instructor.name}
          bio={instructor.bio}
          rating={instructor.rating}
          instructorImage={instructor.instructorImage}
        />
      ))}
    </>
  );
}
