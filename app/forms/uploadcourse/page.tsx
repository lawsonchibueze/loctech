"use client";

import CourseStepper from "@/app/components/CourseStepper";
import DropDown from "@/app/components/DropDown";
import DynamicField from "@/app/components/DynamicField";
import FileInput from "@/app/components/FileInput";
import Header from "@/app/components/Header";
import Input from "@/app/components/Input";
import Draft from "@/app/components/Draft";
import { CourseProps, OptionProps } from "@/app/types/_types";
import convertTime from "@/app/utils/ConvertTime";
import { Grid, Typography } from "@mui/material";
import   { EditorState } from "draft-js";
import { useRef, useState } from "react";
import {useFieldArray, useForm} from "react-hook-form"
import Image from "next/image";

export default function page() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [image, setImage] = useState<string>();
  const [videoURL, setVideo] = useState<string>();
  const [duration, setDuration] = useState(0);

  const {
    //useForm Hook
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm<CourseProps>({
    // resolver:yupResolver(courseSchema) ,

    defaultValues: {
      courseTitle: "",
      description: "",
      courseSlug: "",
      coursePrice: 0,
      category: "",
      isFeatured: "false",
      isTrending: "false",
      isOnline: "false",
      imageSrc: "",
      prerequisites: [{ name: undefined }],
      learningObj: [{ name: undefined }],
      curriculum: [{ name: undefined }],
      video: "",
      duration: 0,
    },
  });

  const [editorState, setEditorState] = useState(EditorState.createEmpty()); //wysiwyg state
  const [editorError, setEditorError] = useState(false); //wysiwyg error state

  const {
    fields: prerequisitesField,
    append: prerequisitesAppend,
  } = //dynamic array for prerequisites textfield
    useFieldArray({
      control,
      name: "prerequisites",
    });

  const { fields: learningObjField, append: learningObjAppend } = useFieldArray(
    //dynamic array for learningObjField
    {
      control,
      name: "learningObj",
    }
  );

  const { fields: curriculumField, append: curriculumAppend } = useFieldArray({
    //dynamic array for curriculumfield
    control,
    name: "curriculum",
  });

  const onChangeDraftHandler = (value: EditorState) => {
    //wysiwyg onChange event
    //  draft onchange handler
    setEditorState(value);
  };

  const validateEditorContent = (editorState: EditorState) => {
    //checking is wysiwyg has text
    const contentState = editorState.getCurrentContent();
    const hasText = contentState.hasText();

    return hasText;
  };

  //////////////PREREQUISTE

  const onAppendPrerequisitesHandler = () => {
    //function to add an empty textfield
    prerequisitesAppend({ name: "".trim() });
  };

  const onAppendLearningObjHandler = () => {
    //function to add an empty textfield
    learningObjAppend({ name: "" });
  };

  const onAppendCurriculumListHandler = () => {
    //function to add an empty textfield
    curriculumAppend({ name: "" });
  };

  ////////FILE INPUT

  const onImageChangeFile = (file: File) => {
    //change event for image file input
    const imgURL = URL.createObjectURL(file); // converts file evemt to a string
    setImage(imgURL);
    // setCourse({ ...course, image: image || null });
  };

  const onVideoChangeFile = (file: File) => {
    //change event for  video file input
    console.log(file);
    const videoURL = URL.createObjectURL(file); // converts file evemt to a string

    setVideo(videoURL);
    if (videoURL && videoRef.current) {
      //  videoRef.current.play()
      videoRef.current.addEventListener("loadedmetadata", () => {
        setDuration(convertTime(videoRef.current?.duration)!); //get duration if the file string is avaliable and theres a video ref. And also convert duration properly
      });
    }
  };
  const submitHandler = (values: CourseProps) => {
    const isValid = validateEditorContent(editorState);

    if (!isValid) {
      setEditorError(true);
      return null;
    }

    console.log({
      ...values,
      image: image,
      isFeatured: values.isFeatured === "true", //converting the string values to boolen
      isTrending: values.isTrending === "true", //converting the string values to boolen
      isOnline: values.isOnline === "true", //converting the string values to boolen
      description: editorState.getCurrentContent().getPlainText(),
      video: videoURL,
      duration: duration,
    });
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <Header title="Add Course" btnText="Upload course" />
      <hr />

      <Grid container m="1rem 0">
        <CourseStepper title="Course Information" number={1} />
        <Grid container item rowSpacing={3} columnSpacing={{ xs: 0, md: 3 }}>
          <Grid container item xs={12} md={6}>
            <Input
              label="Title of course"
              id="course-title"
              type="text"
              register={register("courseTitle", {
                required: "Field is required",
              })}
              name="courseTitle"
              error={!!errors.courseTitle}
              helperText={errors.courseTitle?.message}
            />
          </Grid>
          <Grid container item xs={12} md={6}>
            <Input
              register={register("courseSlug", {
                required: "Field is required",
              })}
              label="Slug"
              id="Slug-title"
              type="text"
              name="courseSlug"
              error={!!errors.courseSlug}
              helperText={errors.courseSlug?.message}
            />
          </Grid>
          <Grid container item xs={12} md={6}>
            <Input
              label="Course price"
              name="coursePrice"
              register={register("coursePrice", {
                required: "Field is required",
              })}
              id="Course-price"
              type="number"
              error={!!errors.coursePrice}
              helperText={errors.coursePrice?.message}
            />
          </Grid>
          <Grid container item xs={12} md={6}>
            <DropDown
              placeHolder="Select course category"
              options={categoryOptions}
              register={register("category", { required: "Field is required" })}
              error={!!errors.category}
              errorMessage={
                errors.category && (
                  <p style={{ color: "red" }}>{errors.category.message}</p>
                )
              }
              control={control}
              setValue={setValue}
              name="category"
            />
          </Grid>

          <Draft
            initialContent={editorState}
            name="description"
            editorState={editorState}
            setValue={setValue}
            onChange={onChangeDraftHandler}
            error={errors}
            register={register("description")}
          />
          {editorError && (
            <p style={{ color: "red" }}>This field is required</p>
          )}
        </Grid>
        {/* Course Featured */}
        <CourseStepper title="Featured Course" number={2} />
        <Grid container item rowSpacing={3} columnSpacing={{ xs: 0, md: 3 }}>
          <Grid container item xs={12} md={4}>
            <DropDown
              placeHolder="does this course have a feature ?"
              options={booleanOptions}
              register={register("isFeatured", {
                required: "Field is required",
              })}
              error={!!errors.isFeatured}
              errorMessage={
                errors.isFeatured && (
                  <p style={{ color: "red" }}>{errors.isFeatured.message}</p>
                )
              }
              // defaultValue="false"
              setValue={setValue}
              name="isFeatured"
              control={control}
            />
          </Grid>
          <Grid container item xs={12} md={4}>
            <DropDown
              placeHolder="Is course online ?"
              options={booleanOptions}
              register={register("isOnline", { required: "Field is required" })}
              error={!!errors.isOnline}
              errorMessage={
                errors.isOnline && (
                  <p style={{ color: "red" }}>{errors.isOnline.message}</p>
                )
              }
              // defaultValue="false"
              setValue={setValue}
              name="isOnline"
              control={control}
            />
          </Grid>

          <Grid container item xs={12} md={4}>
            <DropDown
              placeHolder="Is course trending ?"
              options={booleanOptions}
              register={register("isTrending", {
                required: "Field is required",
              })}
              error={!!errors.isTrending}
              errorMessage={
                errors.isTrending && (
                  <p style={{ color: "red" }}>{errors.isTrending.message}</p>
                )
              }
              // defaultValue="false"
              setValue={setValue}
              name="isTrending"
              control={control}
            />
          </Grid>
        </Grid>

        {/* Course Prequisiite */}

        <CourseStepper title="Course Prerequisites" number={3} />
        <Grid container item rowSpacing={3} columnSpacing={{ xs: 0, md: 3 }}>
          <DynamicField
            label="Add Prerequisites Objectives"
            fields={prerequisitesField}
            registeredName="prerequisites"
            register={register}
            onAppendHandler={onAppendPrerequisitesHandler}
            btnText="Add Prerequisites"
            error={errors.prerequisites}
            helperText={errors.prerequisites?.message}
          />
        </Grid>
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
            error={errors.learningObj}
            helperText={errors.learningObj?.message}
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
            error={errors.curriculum}
            helperText={errors.curriculum?.message}
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
              register={register("imageSrc", { required: true })}
              error={!!errors.imageSrc}
              onChangeFileInput={onImageChangeFile}
            />
            {!!errors.imageSrc && (
              <Typography color="red">This field is required</Typography>
            )}
          </Grid>

          <Grid container item xs={12} md={6} direction="column">
            <FileInput
              placeholder="Upload  video"
              accept="video/*"
              name="video"
              register={register("video", { required: true })}
              error={!!errors.video}
              onChangeFileInput={onVideoChangeFile}
            />
            {!!errors.video && (
              <Typography color="red">This field is required</Typography>
            )}
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
          {image ? (
            <Image src={image} width={100} height={100} alt="image" />
          ) : null}
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
          {videoURL ? (
            <video
              src={videoURL}
              height={100}
              width={100}
              ref={videoRef as React.RefObject<HTMLVideoElement>}
            ></video>
          ) : null}
        </Grid>
      </Grid>
    </form>
  );
}

const categoryOptions: OptionProps[] = [
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

const booleanOptions: OptionProps[] = [
  {
    label: "True",
    value: "true",
  },
  {
    label: "False",
    value: "false",
  },
];
