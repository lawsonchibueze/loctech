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

interface DropDownProps {
  placeholder: string;
  name: string;
  options: OptionProps[];
  value: string;
  onChange: (event: SelectChangeEvent) => void;
}

export default function DropDown({
  placeholder,
  options,
  name,
  onChange,
  value,
}: DropDownProps) {
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
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        value={value}
        name={name}
        onChange={onChange}
      >
        {options.map((option, index) => (
          <MenuItem key={option.value} value={option.value}>
            {" "}
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
