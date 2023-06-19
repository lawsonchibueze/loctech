"use client";
import React from "react";
import { Button, Grid, Typography, colors, useTheme } from "../lib/mui";
import { motion } from "framer-motion";
import { tokens } from "../lib/theme";

interface HeaderProps {
  title: string
  btnText: string
}
export default function Header({title, btnText}:HeaderProps) {
  const MotionBtn = motion(Button);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Grid container justifyContent="space-between" m="1.5rem 0">
      <Typography variant="h2" fontWeight="bold">
        {title}
      </Typography>

      <MotionBtn
      type="submit"
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
        {btnText}
      </MotionBtn>
    </Grid>
  );
}
