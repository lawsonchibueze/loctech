"use client";
import React, { useEffect, useState } from "react";
import AnimatedRoute from "../components/AnimatedRoute";
import {
  Box,
  Button,
  Grid,
  Typography,
  Select,
  SelectChangeEvent,
} from "../lib/mui";
import Header from "../components/Header";
import Input from "../components/Input";
import Draft from "../components/Draft";
import DropDown from "../components/DropDown";
import CourseStepper from "../components/CourseStepper";
import DynamicField from "../components/DynamicField";
import FileInput from "../components/FileInput";
import { CourseProps, OptionProps } from "../types/_types";
import draftToHtml from "draftjs-to-html";
import { EditorState, convertToRaw } from "draft-js";

export default function page() {
  const [course, setCourse] = useState<CourseProps>({
    courseTitle: "",
    // courseDescription: "",
    courseSlug: "",
    coursePrice: 0,
    category: "",
    isFeatured: "false",
    isTrending: "false",
    isOnline: "false",
    prerequisites: [],
    learningObj: [],
    curriculumList: [],
  });

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

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

  const onChangeCoursePrerequisitesHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    // input change handler for CoursePrerequisites
    const updatedField = [...course.prerequisites];
    updatedField[index] = e.target.value;
    setCourse({ ...course, [e.target.name]: updatedField });
  };

  const addCoursePrerequisitesTextFieldHandler = () => {
    //add textfield
    setCourse((prevCourse) => ({
      ...prevCourse,
      prerequisites: [...prevCourse.prerequisites, ""],
    }));
  };

  //////////////LEARNING OBJ
  const onChangeLearningObjHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    // input change handler for LearningObj
    const updatedField = [...course.learningObj];
    updatedField[index] = e.target.value;
    setCourse({ ...course, [e.target.name]: updatedField });
  };

  const addCourseLearningObjTextFieldHandler = () => {
    //add textfield for learningObj
    setCourse((prevCourse) => ({
      ...prevCourse,
      learningObj: [...prevCourse.learningObj, ""],
    }));
  };

  //////////////COURSE CURRICULUM

  const onChangeCurriculumListHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    // input change handler forCurriculumList
    const updatedField = [...course.curriculumList];
    updatedField[index] = e.target.value;
    setCourse({ ...course, [e.target.name]: updatedField });
  };

  const addCourseCurriculumListTextFieldHandler = () => {
    //add textfield forCurriculumList
    setCourse((prevCourse) => ({
      ...prevCourse,
      curriculumList: [...prevCourse.curriculumList, ""],
    }));
  };

  const submitHandler = () => {
    console.log({
      ...course,
      courseDescription: editorState.getCurrentContent().getPlainText(),
    });
  };

  return (
    <>
      <Header submitHandler={submitHandler} />
      <hr />

      <Grid container m="1rem 0">
        <CourseStepper title="Course Information" number={1} />
        <Grid container item rowSpacing={3} columnSpacing={{ xs: 0, md: 3 }}>
          <Grid container item xs={12} md={6}>
            <Input
              label="Title of course"
              id="course-title"
              type="text"
              name="courseTitle"
              onChange={onChangeHandler}
              value={course.courseTitle}
            />
          </Grid>
          <Grid container item xs={12} md={6}>
            <Input
              label="Slug"
              id="Slug-title"
              type="text"
              name="courseSlug"
              onChange={onChangeHandler}
              value={course.courseSlug}
            />
          </Grid>
          <Grid container item xs={12} md={6}>
            <Input
              label="Course price"
              name="coursePrice"
              onChange={onChangeHandler}
              id="Course-price"
              type="number"
              value={course.coursePrice}
            />
          </Grid>
          <Grid container item xs={12} md={6}>
            <DropDown
              placeholder="Select course category"
              name="category"
              value={course.category}
              options={slugOptions}
              onChange={onSelectHandler}
            />
          </Grid>

          <Draft initialContent={editorState} onChange={onChangeDraftHandler} />
        </Grid>
        {/* Course Featured */}
        <CourseStepper title="Featured Course" number={2} />
        <Grid container item rowSpacing={3} columnSpacing={{ xs: 0, md: 3 }}>
          <Grid container item xs={12} md={4}>
            <DropDown
              placeholder="does this course have a feature ?"
              options={featuredOptions}
              name="isFeatured"
              value={course.isFeatured}
              onChange={onSelectHandler}
            />
          </Grid>
          <Grid container item xs={12} md={4}>
            <DropDown
              placeholder="Is course online ?"
              options={featuredOptions}
              name="isOnline"
              value={course.isOnline}
              onChange={onSelectHandler}
            />
          </Grid>

          <Grid container item xs={12} md={4}>
            <DropDown
              placeholder="Is course trending ?"
              options={featuredOptions}
              name="isTrending"
              value={course.isTrending}
              onChange={onSelectHandler}
            />
          </Grid>
        </Grid>

        {/* Course Prequisiite */}

        <CourseStepper title="Course Prerequisites" number={3} />
        <Grid container item rowSpacing={3} columnSpacing={{ xs: 0, md: 3 }}>
          <DynamicField
            label="Add course prerequisites"
            btnText="Add Prerequisite"
            name="prerequisites"
            value={course.prerequisites}
            addTextFieldHandler={addCoursePrerequisitesTextFieldHandler}
            onChange={onChangeCoursePrerequisitesHandler}
          />
        </Grid>

        {/* Learning Objectives */}
        <CourseStepper title=" Learning Objectives " number={4} />
        <Grid container item rowSpacing={3} columnSpacing={{ xs: 0, md: 3 }}>
          <DynamicField
            label="Add Learning Objectives "
            btnText="Add Objectives"
            value={course.learningObj}
            addTextFieldHandler={addCourseLearningObjTextFieldHandler}
            onChange={onChangeLearningObjHandler}
            name=" learningObj"
          />
        </Grid>
        {/* curriculun=m */}
        <CourseStepper title=" Course Curriculum" number={5} />
        <Grid container item rowSpacing={3} columnSpacing={{ xs: 0, md: 3 }}>
          <DynamicField
            label="Add Course Curriculum "
            btnText="Add Curriculum"
            addTextFieldHandler={addCourseCurriculumListTextFieldHandler}
            name="CurriculumList"
            value={course.curriculumList}
            onChange={onChangeCurriculumListHandler}
          />
        </Grid>

        {/* Course Media */}
        <CourseStepper title=" Course Media" number={6} />
        <Grid container item rowSpacing={3} columnSpacing={{ xs: 0, md: 3 }}>
          <Grid container item xs={12} md={6}>
            <FileInput placeholder="Upload  Image" accept="image/*" />
          </Grid>

          <Grid container item xs={12} md={6}>
            <FileInput placeholder="Upload  video" accept="video/*" />
          </Grid>
        </Grid>
      </Grid>
    </>
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
    value: "true",
  },
  {
    label: "False",
    value: "false",
  },
];
