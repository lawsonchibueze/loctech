import { EditorState } from "draft-js";

export type FeaturedCourseArrType = {
  id: number;
  img: string;
  level: string;
  title: string;
  author: string;
  price: string;
};


export interface CourseProps{
  courseTitle: string
  // courseDescription:string
  courseSlug: string
  coursePrice : number
  category: string
  isFeatured:string
  isTrending:string
  isOnline:string
  prerequisites: string[]
  learningObj:string[]
  curriculumList: string[]
}


export interface OptionProps {
  value: string 
  label: string 
}