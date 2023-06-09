"use client";
import React, { useState, useEffect, SetStateAction } from "react";
import { ContentState, Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useTheme, Grid } from "../lib/mui";
import { EditorState, convertToRaw } from "draft-js";
import "draft-js/dist/Draft.css";
import Head from "next/head";
import { tokens } from "../lib/theme";
import { convertToHTML } from "draft-convert";
import {
  Control,
  Controller,
  FieldErrors,
  UseFormSetValue,
} from "react-hook-form";
import { CourseProps } from "../types/_types";
import draftToHtml from "draftjs-to-html";

interface DraftProps {
  initialContent: any;
  name: string;
  register: any;
  editorState: EditorState;
  error: FieldErrors<CourseProps>;
  setValue: UseFormSetValue<CourseProps>;
  onChange: (editorState: any) => void;
}

export default function Draft({
  initialContent,
  onChange,
  editorState,
  setValue,
  name,
  error,
  register,
}: DraftProps) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isEditorEmpty = editorState.getCurrentContent().hasText();


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
