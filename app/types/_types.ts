import { EditorState } from "draft-js";
import { string } from "yup";

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
  imageSrc: string
  duration: number

}


export interface OptionProps {
  value: string 
  label: string 
}



export type LoginType ={
  email : string
  password: string
}

export type SignUpType ={
  email : string
  password: string
  confirmPassword :string
}

export type InstructorType ={
name : string,
email: string
image: string
bio: string
rating:  number
reviews:string
facebook:string
twitter:string
instagram: string
linkedin:string
reviewer:string
reviewerImage:string
reviewerComment:string
}