"use client";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  RefObject,
  forwardRef,
} from "react";
import { MuiFileInput } from "mui-file-input";

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
  console.log("=====err", error);
  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onChangeFileInput!(file)!;
    }
  };

  console.log(error);

  return (
    <>
      <input
        type="file"
        placeholder={placeholder}
        accept={accept}
        name={name}
        {...register}
        id="fileInput"


        onChange={handleFileSelect}
      />
      
    </>
  );
};

export default FileInput;
