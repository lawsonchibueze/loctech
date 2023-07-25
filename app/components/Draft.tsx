"use client";
import React from "react";
import {  Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useTheme, Grid } from "../lib/mui";
import { EditorState, convertToRaw } from "draft-js";
import "draft-js/dist/Draft.css";
import { tokens } from "../lib/theme";
import {

  FieldErrors,
  UseFormSetValue,
} from "react-hook-form";
import { CourseType} from "../types/_types";

interface DraftProps {
  initialContent: any;
  name: string;
  register: any;
  editorState: EditorState;
  error: FieldErrors<CourseType>;
  setValue: UseFormSetValue<CourseType>;
  onChange: (editorState: any) => void;
}

export default function Draft({
  initialContent,
  onChange,



}: DraftProps) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  return (
    <Grid container item style={{}}>
      <Editor
        editorStyle={{
          fontWeight: "bold",
          padding: "0 1rem",
          fontSize: "16px",
          minHeight: "350px",
          maxHeight: "350px",
          border: `2px dashed ${colors.grey[300]}`,
          backgroundColor: colors.grey[900],
          overflowY: "unset",
        }}
        toolbarStyle={{
          color: "#cc2069",
        }}
        wrapperStyle={{
          width: "100%",
        }}
        editorState={initialContent}
        onEditorStateChange={onChange}
        placeholder="Description"
      />
    </Grid>
  );
}
