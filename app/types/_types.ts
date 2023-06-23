export type FeaturedCourseArrType = {
  id: number;
  img: string;
  level: string;
  title: string;
  author: string;
  price: string;
};

export type CourseProps = {
  courseTitle: string;

  description: string;
  courseSlug: string;
  coursePrice: number;
  category: string;
  isFeatured: string;
  isTrending: string;
  isOnline: string;
  prerequisites: { name: string }[];
  learningObj: { name: string }[];
  curriculum: { name: string }[];
  video: string | null;
  image: string;
  duration: number;
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
  name: string
  email: string;
  password: string;
  confirmPassword: string;
};

export type InstructorType = {
  name: string;
  email: string;
  image: string;
  bio: string;
  rating: number;
  reviews: string;
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
  reviewer: string;
  reviewerImage: string;
  reviewerComment: string;
};

export type HeroType = {
  title: string;
  subtitle: string;
  button: string;
  image: "";
};

export type TestimonialType = {
  name: string;
  image: string;
  review: string;
};
