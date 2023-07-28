import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { LegacyRef, Ref, RefObject, forwardRef, useCallback } from "react";
import FileInput from "../components/FileInput";
import { FieldErrors, useForm } from "react-hook-form";
import { CourseType, OptionProps } from "../types/_types";
import Typography from "@mui/material/Typography";
import convertTime from "./ConvertTime";

declare global {
  var cloudinary: any;
}

const uploadPreset = "sj9mklh4";

interface FileProps {
  onChange: (value: string) => void;
  duration?: (value: number) => void;
  value?: string | null;
  register?: any;
  error?: FieldErrors<CourseType>;
  placeholder: string;
}

export function ImageUpload({
  onChange,
  value,
  register,
  error,
  placeholder,
}: FileProps) {
  const handleUpload = useCallback(
    (result: any) => {
      onChange(result.info.secure_url);
    },
    [onChange]
  );

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset={uploadPreset}
      options={{ maxFiles: 1, clientAllowedFormats: ["png", "jpeg"] }}
    >
      {({ open }) => {
        function handleOnClick(e: any) {
          e.preventDefault();
          open();
        }
        return (
          <div onClick={handleOnClick} >
            {value ? (
              <div>
                <Image width={100} height={100} src={value} alt="courseImage"  blurDataURL="spinner.svg"/>
              </div>
            ) : (
              <div onClick={handleOnClick}>
                <FileInput
                  placeholder={placeholder}
                  accept="image/*"
                  name="image"
                  register={register("imageSrc", { required: true })}
                  error={!!error?.imageSrc}
                />
                {!!error?.imageSrc && (
                  <Typography color="red">This field is required</Typography>
                )}
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
}
// Define the VideoUpload component using React.forwardRef
export const VideoUpload = forwardRef<RefObject<HTMLVideoElement>, FileProps>(
  function VideoUpload(
    { onChange, value, register, duration, error, placeholder },
    ref
  ) {


    const handleUpload = useCallback(
      (result: any) => {
        onChange(result.info.secure_url);
      },
      [onChange]
    );

    console.log(ref);

    return (
      <CldUploadWidget
        onUpload={handleUpload}
        uploadPreset={uploadPreset}
        options={{ maxFiles: 1, clientAllowedFormats: ['mp4', 'mov'] }}
      >
        {({ open }) => {
          function handleOnClick(e: any) {
            e.preventDefault();
            open();
          }

          return (
            <div onClick={handleOnClick}>
              {value ? (
                <div>
                  <video
                    width={100}
                    height={100}
                    src={value as unknown as undefined}
                    ref={ref as React.RefObject<HTMLVideoElement>}
                  />
                </div>
              ) : (
                <div onClick={handleOnClick}>
                  <FileInput
                    placeholder={placeholder}
                    accept="video/*"
                    name="video"
                    register={register('video')}
                    error={!!error?.video}
                  />
                  {!!error?.video && (
                    <Typography color="red">This field is required</Typography>
                  )}
                </div>
              )}
            </div>
          );
        }}
      </CldUploadWidget>
    );
  }
);