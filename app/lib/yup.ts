"use client";

import * as yup from "yup";

export const courseSchema = yup.object().shape({
  courseTitle: yup.string().required("This field is required"),
  courseSlug: yup.string().required("This field is required"),
  coursePrice: yup.number().required("This field is required"),
  category: yup.string().required("This field is required"),
  isFeatured: yup
    .mixed()
    .oneOf([true, false, "true", "false"])
    .required("isTrending is required"),

  isTrending: yup
    .mixed()
    .oneOf([true, false, "true", "false"])
    .required("isTrending is required"),

  isOnline: yup
    .mixed()
    .oneOf([true, false, "true", "false"])
    .required("isTrending is required"),


    prerequisites: yup.array().of(
        yup.object().shape({
          name: yup.string().required("field is required"),
        })
      ),
  learningObj:  yup.object().shape({
    name: yup.string().required("field is required"),
  }),
  curriculum: yup.object().shape({
    name: yup.string().required("field is required"),
  }),
  video: yup.mixed().nullable().required("Video is required"),
  image: yup.mixed().nullable().required("Video is required"),
  duration: yup.mixed().nullable().required("Video is required"),
});
