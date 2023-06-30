"use client";
import React, {
  ChangeEvent,
  
} from "react";
import { useTheme } from "../lib/mui";
import { tokens } from "../lib/theme";

interface FileInputProps {
  placeholder: string;
  accept: string;
  name?: string;
  value?: string | null;
  register: any;
  onChangeFileInput?: (file: File) => void;
  error: boolean;
}

const FileInput = (
  {
    placeholder,
    accept,
    onChangeFileInput,
    name,
    value,
    register,
    error,
  }: FileInputProps,
  refVideo: React.ForwardedRef<HTMLVideoElement>
) => {

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onChangeFileInput!(file)!;
    }
  };


  return (
    <>
      <input
        type="file"
        placeholder={placeholder}
        accept={accept}
        name={name}
        {...register}
        id="fileInput"
        className="custom-file-input"
        onChange={handleFileSelect}
      />
      <label htmlFor="fileInput" className="custom-file-label" style={{color: colors.primary[300]}}>
        {value ? <p>{value} </p> : placeholder}
      </label>
    </>
  );
};

export default FileInput;
