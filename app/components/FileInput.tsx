"use client";
import React,{ChangeEvent, ChangeEventHandler, RefObject, forwardRef} from "react";
import { MuiFileInput } from "mui-file-input";

interface FileInputProps{
    placeholder: string
    accept : string
    name?: string
    value?: string|null
    register:any
    onChangeFileInput?: (file: File) => void;

}

const  FileInput = ({placeholder, accept, onChangeFileInput,name, value,register}:FileInputProps, refVideo:React.ForwardedRef<HTMLVideoElement> ) => {


  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
       onChangeFileInput!(file)!;
    }
  };


  return (
  <>
   <input type="file" onChange={ handleFileSelect}  accept={accept}  {...register}/>
  
  </>
  );
}

export default FileInput