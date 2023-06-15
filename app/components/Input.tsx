"use client";
import React, { useEffect } from "react";
import { TextField, useTheme } from "../lib/mui";
import { tokens } from "../lib/theme";


interface InputProps {
  id: string;
  label: string;
  value?: string | number | File | undefined;
  name: string;
  type: React.HTMLInputTypeAttribute;
  error?: boolean;
  helperText?: string | false;
  register: any;

  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = React.forwardRef(
  (
    {
      id,
      label,
      type,
      onChange,
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
        // helperText={helperText}
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
  }
);

export default Input;
