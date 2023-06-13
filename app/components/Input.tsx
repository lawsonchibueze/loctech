"use client";
import React, { useEffect } from "react";
import { TextField, useTheme } from "../lib/mui";
import { tokens } from "../lib/theme";
import { CourseProps } from "../types/_types";

interface InputProps {
  id: string;
  label: string;
  value:string|number
  name:string
  type: React.HTMLInputTypeAttribute;
onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  id,
  label,
  type,
onChange,
value,
name
}: InputProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  //onchnage handler



  return (
    <TextField
      id={id}
      label={label}
      variant="filled"
      type={type}
      fullWidth
      name={name}
      value={value}
      onChange={onChange}
     
      sx={{
        "& .MuiFormLabel-root ,.MuiFormLabel-root.Mui-focused": {
          color: colors.rose[500],
          fontWeight: "bold",
        },
        "& .MuiFormControl-root": {
          borderBottom: "5px solid black",
        },

        "& .MuiFilledInput-root": {
          borderColor: "#53af5b ",
        },
      }}
    />
  );
};

export default Input;
