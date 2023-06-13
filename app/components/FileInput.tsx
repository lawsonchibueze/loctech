"use client";
import React from "react";
import { MuiFileInput } from "mui-file-input";

interface FileInputProps{
    placeholder: string
    accept : string
}

export default function FileInput({placeholder, accept}:FileInputProps) {
  const [file, setFile] = React.useState<File | null | undefined>(null);
  const handleChange = (newFile: File | null) => {
    setFile(newFile);
    console.log(newFile)
    console.log(newFile?.type.startsWith("image/"));
  };
  return (
    <MuiFileInput
      value={file}
      fullWidth
      onChange={(e: File | null) => handleChange(e)}
      placeholder={placeholder}
      inputProps={{
        accept:`${accept}`,
        multiple: false
      }}
    />
  );
}
