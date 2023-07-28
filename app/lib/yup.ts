"use client";

import * as yup from "yup";

const passwordRegex = `^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()-=_+{};':\"\\|,.<>/?]).{8,}$`;


export const courseSchema = yup.object().shape({
  courseTitle: yup.string().required("This field is required"),
  courseSlug: yup.string().required("This field is required"),
  coursePrice: yup.number().required("This field is required"),
  category: yup.string().required("This field is required"),
  isFeatured: yup.boolean().required("This field is required"),
  Instructor: yup.boolean().required("This field is required"),
description: yup.string().required("This field is required"),
  isTrending: yup.boolean().required("This field is required"),

  isOnline: yup.boolean().required("This field is required"),

  prerequisites: yup.array().of(
    yup.object().shape({
      name: yup.string().required("field is required"),
    })
  ),
  learningObj: yup.object().shape({
    name: yup.string().required("field is required"),
  }),
  curriculumList: yup.object().shape({
    name: yup.string().required("field is required"),
  }),

  targetAud: yup.object().shape({
    name: yup.string().required("field is required"),
  }),
  video: yup.string(),
  image: yup.string().required("Image is required"),
  duration: yup.string().required("Image is required"),
  curriculum: yup.string().required("field is required"),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Enter your email"),
  password: yup.string().min(8).max(32).required(),
});

export const SignUpSchema = yup.object().shape({
  name: yup.string().required("This field is required"),
  email: yup.string().email("Invalid email").required("Enter your email"),
  password: yup.string().min(8).max(32).required("Enter your password"),
  confirmPassword: yup
    .string()
    .required("Confirm password")
    .oneOf([yup.ref("password")], "Passwords does not match"),
});

export const instructorSchema = yup.object().shape({
  name: yup.string().required("This field is required"),
  bio: yup.string(),
  email: yup.string().email("Invalid email"),
  instructorImage: yup.string(),
  rating: yup.number(),
  reviews: yup.string(),
  facebook: yup.string(),
  twitter: yup.string(),
  instagram: yup.string(),
  linkedin: yup.string(),
  reviewer: yup.string(),
  reviewerImage: yup.string(),
  reviewerComment: yup.string(),
});

export const heroSchema = yup.object().shape({
  title: yup.string().required("This field is required"),
  subtitle: yup.string().required("This field is required"),
  button: yup.string().required("This field is required"),
  image: yup.string().required(),
});

export const testimonialSchema = yup.object().shape({
  name: yup.string().required("This field is required"),
  image: yup.string().required("This field is required"),
  review: yup.string().required("This field is required"),
});


export const postSchema = yup.object().shape({
  title : yup.string().required("This field is required"),
  subtitle : yup.string().required("This field is required"),
  postSlug: yup.string().required("This field is required"),
  image: yup.string().required("This field is required"),
  content :yup.string().required("This field is required"),
  author: yup.string().required("This field is required"),


})