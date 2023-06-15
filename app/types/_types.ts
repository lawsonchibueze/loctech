import { EditorState } from "draft-js";

export type FeaturedCourseArrType = {
  id: number;
  img: string;
  level: string;
  title: string;
  author: string;
  price: string;
};


export type CourseProps ={
  courseTitle: string

  // courseDescription:string
  courseSlug: string
  coursePrice : number
  category: string
  isFeatured:string| boolean
  isTrending:string| boolean
  isOnline:string| boolean
  prerequisites:  { name: string }[] 
  learningObj:{ name: string }[] 
  curriculum: { name: string }[] 
  video: string| null
  image: string| null
  duration: number | null

}


export interface OptionProps {
  value: string | boolean
  label: string 
}

