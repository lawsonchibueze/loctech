export type FeaturedCourseArrType = {
  id?: string;
  img: string;
  level?: string;
  title: string;
  author?: string;
  price: string;
  description: string;
  slug: string;
};

export type CourseType = {
  id?: string;
  courseTitle: string;
  description: string;
  courseSlug: string;
  coursePrice: number;
  category: string;
  isFeatured: string;
  isTrending: string;
  isOnline: string;
  prerequisites: { name:null | string }[];
  learningObj: { name:null | string }[];
  curriculumList: { name:null | string }[];
  targetAud: { name:null  | string}[];
  video: string | null;
  imageSrc: string;
  duration: number;
  curriculum: string;
  Instructor?: string;
};

// Define a type that transforms 'learningObj' to an array of strings
export type TransformedCourseType = CourseType & {
   learningObj: string[] ; 
   prerequisites: string[]
   targetAud: string[]
};
export interface OptionProps {
  value: string;
  label: string;
}

export type LoginType = {
  email: string;
  password: string;
};

export type SignUpType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type InstructorType = {
  name: string;
  email: string | undefined;
  instructorImage: string | undefined;
  bio: string | undefined;
  rating: number | undefined;
  reviews: string | undefined;
  facebook: string | undefined;
  twitter: string | undefined;
  instagram: string | undefined;
  linkedin: string | undefined;
  reviewer: string | undefined;
  reviewerImage: string | undefined;
  reviewerComment: string | undefined;
};

export type HeroType = {
  id?: string;
  title: string;
  subtitle: string;
  button: string;
  image: string;
};

export type TestimonialType = {
  name: string;
  image: string;
  review: string;
};


export  type PostType ={
title: string
subtitle: string
slug: string
image : string
content: string
author: string
}