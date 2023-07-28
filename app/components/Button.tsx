"use client";
import React from "react";
import { Button, SxProps, useTheme } from "../lib/mui";
import { tokens } from "../lib/theme";

interface ButtonType {
  title: string;
  sx: SxProps;
  onClick?:  (event: React.MouseEvent<HTMLButtonElement>)=>void
}
export default function CustomButton({ title, sx , onClick}: ButtonType) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Button
      variant="contained"
      size="large"
      sx={{ ...sx, backgroundColor: colors.rose[500] }}
      onClick={onClick}
    >
      {title}
    </Button>
  );
}
