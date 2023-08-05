"use client";
import React, { useEffect } from "react";

import { tokens } from "../lib/theme";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  useTheme,
} from "../lib/mui";
import { CourseType, OptionProps } from "../types/_types";
import { Controller, UseFormSetValue } from "react-hook-form";

interface DropDownProps {
  placeHolder: string;
  options: OptionProps[];
  register: any;
  error: boolean;
  errorMessage: React.JSX.Element | undefined;
  defaultValue?: string | boolean;
  setValue: UseFormSetValue<CourseType>;
  name: string;
  control: any;
}

const DropDown = ({
  placeHolder,
  options,
  register,
  error,
  errorMessage,
  defaultValue,
  setValue,
  name,
  control,
}: DropDownProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    setValue(name as unknown as any, defaultValue || "");
  }, [defaultValue, setValue, name]);

  return (
    <FormControl
      variant="filled"
      fullWidth
      sx={{
        "& .MuiFormLabel-root ,.MuiFormLabel-root.Mui-focused": {
          color: colors.rose[500],
          fontWeight: "bold",
        },
      }}
    >
      <InputLabel>{name}</InputLabel>
      <Controller
        defaultValue={defaultValue}
        name={name}
        control={control}
        // rules={{ required: true }}
        render={({ field }) => (
          <Select {...field} defaultValue={defaultValue}>
            {options.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        )}
      />
      {errorMessage}
    </FormControl>
  );
};

export default DropDown;

{
  /* */
}
