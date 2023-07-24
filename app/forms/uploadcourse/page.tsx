"use client";
import { Grid, Box } from "../../lib/mui";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Draft from "../../components/Draft";
import DropDown from "../../components/DropDown";
import CourseStepper from "../../components/CourseStepper";
import DynamicField from "../../components/DynamicField";
import { EditorState } from "draft-js";
import convertTime from "../../utils/ConvertTime";
import { useFieldArray, useForm } from "react-hook-form";
import { CourseType, OptionProps } from "../../types/_types";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { ImageUpload, VideoUpload } from "@/app/utils/ImageAndVideoUpload";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import BasicModal from "@/app/components/Modal";
import { redirect } from "next/navigation";

export default function  Page() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mount, setMount] = useState(false);
  const { data: session } = useSession() as unknown as any;
  const [isError, setIsError] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (session?.user.role !== "ADMIN") {
      redirect("/"); //redirect if role is not ADMIN
    }
  }, [session?.user.role]);

  useEffect(() => {
    setMount(true);
  }, []);
  const {
    //useForm Hook
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    setValue,
    reset,
  } = useForm<CourseType>({
    // resolver:yupResolver(courseSchema) ,

    defaultValues: {
      courseTitle: "",
      description: "",
      courseSlug: "",
      Instructor: "",
      coursePrice: 0,
      category: "",
      isFeatured: "false",
      isTrending: "false",
      isOnline: "false",
      imageSrc: "",
      prerequisites: [{ name: undefined }],
      learningObj: [{ name: undefined }],
      curriculumList: [{ name: undefined }],
      video: "",
      duration: 0,
      curriculum: "",
      targetAud: [{ name: undefined }],
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

  const imageSrc = watch("imageSrc");
  const videoSrc = watch("video");
  const duration = watch("duration");
  const setCustomValue = useCallback(
    (id: any, value: any) => {
      setValue(id, value, {
        shouldDirty: true,
        shouldTouch: true,
        shouldValidate: true,
      });
    },
    [setValue]
  );

  useEffect(() => {
    if (window !== undefined) {
      if (videoSrc && videoRef.current) {
        videoRef.current.addEventListener("loadedmetadata", () => {
          setCustomValue("duration", convertTime(videoRef.current?.duration)!); //get duration if the file string is avaliable and theres a video ref. And also convert duration properly
        });
      }
    }
  }, [videoRef, videoSrc, setCustomValue]);

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
    name: "curriculumList",
  });

  const { fields: targetAudField, append: targetAudAppend } = useFieldArray({
    //dynamic array for targetAudField
    control,
    name: "targetAud",
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

  const onAppendTargetAudHandler = () => {
    //function to add an empty textfield
    targetAudAppend({ name: "" });
  };

  ////////FILE INPUT

  const submitHandler = (values: CourseType) => {
    const isValid = validateEditorContent(editorState);

    if (!isValid) {
      setEditorError(true);
      return null;
    }

    const data = {
      ...values,
      imageSrc: imageSrc,
      courseSlug: values.courseSlug.trim(),
      coursePrice: +values.coursePrice,
      isFeatured: values.isFeatured === "true", //converting the string values to boolen
      isTrending: values.isTrending === "true", //converting the string values to boolen
      isOnline: values.isOnline === "true", //converting the string values to boolen
      description: editorState.getCurrentContent().getPlainText(),
      prerequisites: values.prerequisites.map(({ name }) => name.trim()), // converting   prerequisites from array of objects to array of strings
      curriculumList: values.curriculumList.map(({ name }) => name.trim()),
      learningObj: values.learningObj.map(({ name }) => name.trim()),
      targetAud: values.targetAud.map(({ name }) => name.trim()),
      video: imageSrc,
      duration: duration,
      Instructor: {
        name: values.Instructor,
      },
    };

    if (session.user.role === "ADMIN") {
      axios
        .post("/api/course", data)
        .then((response) => {
          // Request was successful
          if (response.data) {
            setIsError(false);
            setOpen(true);
            reset();
          }
        })
        .catch((error) => {
          // An error occurred
          setIsError(true);
          setOpen(true);
        });
    }
  };

  return (
    <>
      {mount && (
        <Box sx={{ p: { xs: "10px 25px", md: "20px 50px" } }}>
          <form onSubmit={handleSubmit(submitHandler)}>
            <Header title="Add Course" btnText="Upload course" />
            <hr />

            {isError ? (
              <BasicModal
                color="red"
                icon={
                  <ErrorOutlineIcon sx={{ color: "red", fontSize: "30px" }} />
                }
                title="Course did not upload !"
                description="An error occurred. Try again"
                open={open}
                handleClose={handleClose}
              />
            ) : (
              <BasicModal
                color="green"
                icon={
                  <CheckCircleOutlineIcon
                    sx={{ color: "green", fontSize: "30px" }}
                  />
                }
                title="Course uploaded successful!"
                description="congratulations !. Your course have been uploaded"
                open={open}
                handleClose={handleClose}
              />
            )}

            <Grid container m="1rem 0">
              <CourseStepper title="Course Information" number={1} />
              <Grid
                container
                item
                rowSpacing={3}
                columnSpacing={{ xs: 0, md: 3 }}
              >
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
                    register={register("category", {
                      required: "Field is required",
                    })}
                    error={!!errors.category}
                    errorMessage={
                      errors.category && (
                        <p style={{ color: "red" }}>
                          {errors.category.message}
                        </p>
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
              <Grid
                container
                item
                rowSpacing={3}
                columnSpacing={{ xs: 0, md: 3 }}
              >
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
                        <p style={{ color: "red" }}>
                          {errors.isFeatured.message}
                        </p>
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
                    register={register("isOnline", {
                      required: "Field is required",
                    })}
                    error={!!errors.isOnline}
                    errorMessage={
                      errors.isOnline && (
                        <p style={{ color: "red" }}>
                          {errors.isOnline.message}
                        </p>
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
                        <p style={{ color: "red" }}>
                          {errors.isTrending.message}
                        </p>
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
              <Grid
                container
                item
                rowSpacing={3}
                columnSpacing={{ xs: 0, md: 3 }}
              >
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
              <Grid
                container
                item
                rowSpacing={3}
                columnSpacing={{ xs: 0, md: 3 }}
              >
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
              {/* curriculum List */}
              <CourseStepper title=" Course Curriculum" number={5} />
              <Grid
                container
                item
                rowSpacing={3}
                columnSpacing={{ xs: 0, md: 3 }}
              >
                <DynamicField
                  label="Add Course Curriculum List"
                  fields={curriculumField}
                  registeredName="curriculumList"
                  register={register}
                  onAppendHandler={onAppendCurriculumListHandler}
                  btnText="Add Curriculum List"
                  error={errors.curriculumList}
                  helperText={errors.curriculumList?.message}
                />
              </Grid>

              {/* Target audience */}
              <CourseStepper title=" Target audience" number={6} />
              <Grid
                container
                item
                rowSpacing={3}
                columnSpacing={{ xs: 0, md: 3 }}
              >
                <DynamicField
                  label="Add Target Audience"
                  fields={targetAudField}
                  registeredName="targetAud"
                  register={register}
                  onAppendHandler={onAppendTargetAudHandler}
                  btnText="Add Target Audience"
                  error={errors.targetAud}
                  helperText={errors.targetAud?.message}
                />
              </Grid>

              {/* Curriculum */}
              <CourseStepper title="Add Curriculm & Instructor" number={7} />
              <Grid
                container
                item
                rowSpacing={3}
                columnSpacing={{ xs: 0, md: 3 }}
              >
                <Grid container item xs={12} md={6}>
                  <Input
                    register={register("curriculum", {
                      required: "Field is required",
                    })}
                    label="Curriculum"
                    id="curriculum"
                    type="text"
                    name="curriculum"
                    error={!!errors.curriculum}
                    helperText={errors.curriculum?.message}
                  />
                </Grid>

                <Grid container item xs={12} md={6}>
                  <Input
                    register={register("Instructor", {
                      required: "Field is required",
                    })}
                    label="Instructor name"
                    id="Instructor"
                    type="text"
                    name="Instructor"
                    error={!!errors.Instructor}
                    helperText={errors.Instructor?.message}
                  />
                </Grid>
              </Grid>

              {/* Course Media */}
              <CourseStepper title=" Course Media" number={8} />
              <Grid
                container
                item
                rowSpacing={3}
                columnSpacing={{ xs: 0, md: 3 }}
              >
                <Grid container item xs={12} md={6}>
                  <ImageUpload
                    onChange={(value) => setCustomValue("imageSrc", value)}
                    value={imageSrc}
                    register={register}
                    error={errors}
                    placeholder="Course Image"
                  />
                </Grid>

                <Grid container item xs={12} md={12} direction="column">
                  <VideoUpload
                    onChange={(value: string) => setCustomValue("video", value)}
                    duration={(value: number) =>
                      setCustomValue("duration", value)
                    }
                    value={videoSrc}
                    register={register}
                    error={errors}
                    ref={videoRef as unknown as any}
                    placeholder="Course Video"
                  />
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Box>
      )}
    </>
  );
}

const categoryOptions: OptionProps[] = [
  {
    label: "DATA SCIENCE",
    value: "DATA_SCIENCE",
  },
  {
    label: "GRAPHICS ",
    value: "GRAPHICS_MEDIA",
  },
  {
    label: "CLOUD",
    value: "CLOUD COMPUTING",
  },
  { label: "CODING", value: "CODING" },
  { label: "OFFICE PRODUCTIVITY", value: "OFFICE_PRODUCTIVITY" },
  {
    label: "NETWORKING",
    value: "NETWORKING",
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
