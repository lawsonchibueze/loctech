"use client";
import React from "react";

import { tokens } from "../lib/theme";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  useTheme,
} from "../lib/mui";
import { OptionProps } from "../types/_types";
import { Controller, RegisterOptions } from "react-hook-form";

interface DropDownProps {
  placeholder: string;
  name: string;
  options: OptionProps[];
  value?: string | boolean;
  control: any;
  rules: RegisterOptions;
  defaultValue?: string;
  onChange?: (event: SelectChangeEvent) => void;
}

const DropDown = React.forwardRef(
  (
    {
      placeholder,
      options,
      name,
      onChange,
      control,
      rules,
      defaultValue,
      value,
    }: DropDownProps,
    ref
  ) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

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
        <InputLabel>{placeholder}</InputLabel>
        <Controller
          name={name}
          control={control}
          // defaultValue={defaultValue}
          rules={rules}
          render={({ field }) => (
            <Select {...field}>
              {options.map((option) => (
                <MenuItem
                  key={option.value as unknown as any}
                  value={option.value as unknown as any}
                >
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          )}
        />
      </FormControl>
    );
  }
);

export default DropDown;
