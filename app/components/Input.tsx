"use client";
import React, { useEffect } from "react";
import { TextField, useTheme } from "../lib/mui";
import { tokens } from "../lib/theme";
import { FieldError, FieldErrors } from "react-hook-form";
import { CourseProps } from "../types/_types";


interface InputProps {
  id: string;
  label: string;
  name: string;
  type: React.HTMLInputTypeAttribute;
  error?: boolean | undefined
  helperText:string | undefined

  register: any;

}

const Input = React.forwardRef(
  (
    {
      id,
      label,
      type,
      name,
      error,
     helperText,
      register,
    }: InputProps,
    ref
  ) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    //onchnage handler
console.log("====", !!`touched.${name}` )
    return (
      <TextField
        id={id}
        label={label}
        variant="filled"
        type={type}
        fullWidth
        {...register}
        name={name}
        error={error}
        helperText={helperText}
        
        
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
  }
);

export default Input;
