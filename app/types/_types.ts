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

description:string
  courseSlug: string
  coursePrice : number
  category: string
  isFeatured:string
  isTrending:string
  isOnline:string
  prerequisites:  { name: string }[] 
  learningObj:{ name: string }[] 
  curriculum: { name: string }[] 
  video: string| null
  image: string
  duration: number

}


export interface OptionProps {
  value: string 
  label: string 
}

