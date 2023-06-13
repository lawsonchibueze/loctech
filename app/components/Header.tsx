"use client";
import React from "react";
import { Button, Grid, Typography, colors, useTheme } from "../lib/mui";
import { motion } from "framer-motion";
import { tokens } from "../lib/theme";
import { CourseProps } from "../types/_types";

interface HeaderProps{
  submitHandler: () => void
}

export default function Header({submitHandler}:HeaderProps) {
  const MotionBtn = motion(Button);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Grid container justifyContent="space-between" m="1.5rem 0">
      <Typography variant="h2" fontWeight="bold">
        Upload New Courses
      </Typography>

      <MotionBtn
      onClick={submitHandler}
        whileHover={{ scale: 1.1, backgroundColor: colors.rose[600] }}
        variant="contained"
        size="large"
        sx={{
          backgroundColor: colors.rose[500],
          fontWeight: "bold",
          textTransform: "none",
          fontSize: "18px",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Upload Course
      </MotionBtn>
    </Grid>
  );
}
