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
  curriculumList: { name: string }[] 
  targetAud : { name: string }[] 
  video: string| null
  imageSrc: string
  duration: number
  curriculum: string
}


export interface OptionProps {
  value: string;
  label: string;
}

export type LoginType = {
  email: string;
  password: string;
};

export type SignUpType = {
  name: string
  email: string;
  password: string;
  confirmPassword: string;
};

export type InstructorType = {
 
  name: string
  email: string | undefined
  instructorImage: string | undefined
  bio: string | undefined
  rating: number | undefined
  reviews: string | undefined
  facebook: string | undefined
  twitter: string | undefined
  instagram: string | undefined
  linkedin: string | undefined
  reviewer: string | undefined
  reviewerImage: string | undefined
  reviewerComment: string | undefined
};

export type HeroType = {
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
