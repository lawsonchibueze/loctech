"use client";

import * as yup from "yup";

export const courseSchema = yup.object().shape({
  courseTitle: yup.string().required("This field is required"),
  courseSlug: yup.string().required("This field is required"),
  coursePrice: yup.number().required("This field is required"),
  category: yup.string().required("This field is required"),
  isFeatured: yup.boolean().required("This field is required"),
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
  curriculum: yup.object().shape({
    name: yup.string().required("field is required"),
  }),
  video: yup.string().required("Video is required"),
  image: yup.string().required("Image is required"),
  duration: yup.string().required("Image is required")
});
