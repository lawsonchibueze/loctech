"use client";
import React, { useEffect, useState, useRef } from "react";
import AnimatedRoute from "../components/AnimatedRoute";
import { yupResolver } from "@hookform/resolvers/yup";
import AddIcon from "@mui/icons-material/Add";

import {
  Box,
  Button,
  Grid,
  Typography,
  Select,
  SelectChangeEvent,
  TextField,
  colors,
  useTheme,
} from "../lib/mui";
import * as yup from "yup";

import Header from "../components/Header";
import Input from "../components/Input";
import Draft from "../components/Draft";
import DropDown from "../components/DropDown";
import CourseStepper from "../components/CourseStepper";
import DynamicField from "../components/DynamicField";
import FileInput from "../components/FileInput";
import draftToHtml from "draftjs-to-html";
import { EditorState, convertToRaw } from "draft-js";
import { MuiFileInputProps } from "mui-file-input";
import Image from "next/image";
import convertTime from "../utils/ConvertTime";
import { FieldArray, Formik, useFormik } from "formik";
import { courseSchema } from "../lib/yup";
import { useFieldArray, useForm } from "react-hook-form";
import { CourseProps, OptionProps } from "../types/_types";
import { motion } from "framer-motion";
import { tokens } from "../lib/theme";
// import { courseSchema } from "../lib/yup";

export default function page() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [course, setCourse] = useState<CourseProps>({
    courseTitle: "",
    // courseDescription: "",
    courseSlug: "",
    coursePrice: 0,
    category: "",
    isFeatured: false,
    isTrending: false,
    isOnline: false,
    prerequisites: [],
    learningObj: [],
    curriculum: [],
    image: null,
    video: null,
    duration: null,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<CourseProps>({
    // resolver:yupResolver(courseSchema) ,

    defaultValues: {
      courseTitle: "",
      // courseDescription: "",
      courseSlug: "",
      coursePrice: 0,
      category: "",
      isFeatured: false,
      isTrending: false,
      isOnline: false,
      prerequisites: [{ name: " " }],
      learningObj: [{ name: " " }],
      curriculum: [{ name: " " }],
      image: null,
      video: null,
      duration: null,
    },
  });

  interface PrerequisitesProps {
    value: string;
  }
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const { fields: prerequisitesField, append: prerequisitesAppend } =
    useFieldArray({
      control,
      name: "prerequisites",
    });

  const { fields: learningObjField, append: learningObjAppend } = useFieldArray(
    {
      control,
      name: "learningObj",
    }
  );

  const { fields: curriculumField, append: curriculumAppend } = useFieldArray({
    control,
    name: "curriculum",
  });

  // course title
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // input change handler
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const onSelectHandler = (event: SelectChangeEvent) => {
    //dropdown handler
    setCourse({ ...course, [event.target.name]: event.target.value });
  };

  const onChangeDraftHandler = (value: EditorState) => {
    //  draft onchange handler
    setEditorState(value);
  };

  //////////////PREREQUISTE

  const onAppendPrerequisitesHandler = () => {
    prerequisitesAppend({ name: "".trim() });
  };

  const onAppendLearningObjHandler = () => {
    learningObjAppend({ name: "" });
  };

  const onAppendCurriculumListHandler = () => {
    curriculumAppend({ name: "" });
  };

  ////////FILE INPUT

  const onImageChangeFile = (file: File) => {
    console.log(file);
    const image = URL.createObjectURL(file);

    setCourse({ ...course, image: image || null });
  };

  const onVideoChangeFile = (file: File) => {
    console.log(file);
    const video = URL.createObjectURL(file);

    setCourse({ ...course, video: video || null });
    if (video && videoRef.current) {
      //  videoRef.current.play()
      videoRef.current.addEventListener("loadedmetadata", () => {
        setCourse({
          ...course,
          duration: convertTime(videoRef.current?.duration),
        });
      });
    }
  };
  console.log(course.video);
  const submitHandler = (values: CourseProps) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <Header />
      <hr />

      <Grid container m="1rem 0">
        <CourseStepper title="Course Information" number={1} />
        <Grid container item rowSpacing={3} columnSpacing={{ xs: 0, md: 3 }}>
          <Grid container item xs={12} md={6}>
            <Input
              error={false}
              helperText={""}
              label="Title of course"
              id="course-title"
              type="text"
              register={register("courseTitle")}
              name="courseTitle"
            />
          </Grid>
          <Grid container item xs={12} md={6}>
            <Input
              register={register("courseSlug")}
              label="Slug"
              id="Slug-title"
              type="text"
              name="courseSlug"
            />
          </Grid>
          <Grid container item xs={12} md={6}>
            <Input
              label="Course price"
              name="coursePrice"
              register={register("coursePrice")}
              id="Course-price"
              type="number"
              error={false}
              helperText={""}
            />
          </Grid>
          <Grid container item xs={12} md={6}>
            <DropDown
              placeholder="Select course category"
              value={course.category}
              options={slugOptions}
              control={control}
              name="category"
              rules={{ required: "This field is required" }}
            />
          </Grid>

          {/* <Draft initialContent={editorState} onChange={handleChange} /> */}
        </Grid>
        {/* Course Featured */}
        <CourseStepper title="Featured Course" number={2} />
        <Grid container item rowSpacing={3} columnSpacing={{ xs: 0, md: 3 }}>
          <Grid container item xs={12} md={4}>
            <DropDown
              placeholder="does this course have a feature ?"
              options={featuredOptions}
              value={course.isFeatured}
              name="isFeatured"
              control={control}
              rules={{ required: "This field is required" }}
            />
          </Grid>
          <Grid container item xs={12} md={4}>
            <DropDown
              placeholder="Is course online ?"
              options={featuredOptions}
              value={course.isOnline}
              control={control}
              rules={{ required: "This field is required" }}
              name="isOnline"
            />
          </Grid>

          <Grid container item xs={12} md={4}>
            <DropDown
              placeholder="Is course trending ?"
              options={featuredOptions}
              value={course.isTrending}
              control={control}
              rules={{ required: "This field is required" }}
              name="isTrending"
            />
          </Grid>
        </Grid>

        {/* Course Prequisiite */}

        <CourseStepper title="Course Prerequisites" number={3} />
        <DynamicField
          label="Add Prerequisites Objectives"
          fields={prerequisitesField}
          registeredName="prerequisites"
          register={register}
          onAppendHandler={onAppendPrerequisitesHandler}
          btnText="Add Prerequisites"
        />
        {/* Learning Objectives */}
        <CourseStepper title=" Learning Objectives " number={4} />
        <Grid container item rowSpacing={3} columnSpacing={{ xs: 0, md: 3 }}>
          <DynamicField
            label="Add Learning Objectives"
            fields={learningObjField}
            registeredName="learningObj"
            register={register}
            onAppendHandler={onAppendLearningObjHandler}
            btnText="Add Learning Obj"
          />
        </Grid>
        {/* curriculun=m */}
        <CourseStepper title=" Course Curriculum" number={5} />
        <Grid container item rowSpacing={3} columnSpacing={{ xs: 0, md: 3 }}>
          <DynamicField
            label="Add Course Curriculum"
            fields={curriculumField}
            registeredName="curriculum"
            register={register}
            onAppendHandler={onAppendCurriculumListHandler}
            btnText="Add Curriculum"
          />
        </Grid>

        {/* Course Media */}
        <CourseStepper title=" Course Media" number={6} />
        <Grid container item rowSpacing={3} columnSpacing={{ xs: 0, md: 3 }}>
          <Grid container item xs={12} md={6}>
            <FileInput
              placeholder="Upload  Image"
              accept="image/*"
              name="image"
              register={register("image")}

              // onChangeFileInput={handleChange}
              // value={course.image}
            />
          </Grid>

          <Grid container item xs={12} md={6}>
            <FileInput
              placeholder="Upload  video"
              accept="video/*"
              name="video"
              register={register("video")}
              value={course.video}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid container>
        <Grid
          height="100px"
          width="100px"
          container
          item
          justifyContent="flex-start"
          xs={12}
          md={6}
        >
          {course.image !== null ? (
            <Image
              src={course.image !== null ? course.image : ""}
              height={100}
              width={100}
              alt={course.image !== null ? course.image : ""}
            />
          ) : (
            ""
          )}
        </Grid>

        <Grid
          height="100px"
          width="100px"
          container
          item
          justifyContent="flex-start"
          xs={12}
          md={6}
        >
          <video
            src={course.video !== null ? course.video : ""}
            height={100}
            width={100}
            ref={videoRef as React.RefObject<HTMLVideoElement>}
          ></video>
        </Grid>
      </Grid>
    </form>
  );
}

const slugOptions: OptionProps[] = [
  {
    label: "Data Science",
    value: "data_science",
  },
  {
    label: "Graphics Media",
    value: "Graphics",
  },
  {
    label: "Cloud",
    value: "cloud",
  },
];

const featuredOptions: OptionProps[] = [
  {
    label: "True",
    value: true,
  },
  {
    label: "False",
    value: false,
  },
];
