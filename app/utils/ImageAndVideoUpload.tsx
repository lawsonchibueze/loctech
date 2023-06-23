import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";
import FileInput from "../components/FileInput";
import { useForm } from "react-hook-form";
import { CourseProps, OptionProps } from "../types/_types";
import Typography from "@mui/material/Typography";

declare global {
  var cloudinary: any;
}

const uploadPreset = "sj9mklh4";

interface FileProps {
  onChange: (value: string) => void;
  value: string;
}

export function ImageUpload({ onChange, value }: FileProps) {
  const {
    //useForm Hook
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    setValue,
  } = useForm<CourseProps>({
    // resolver:yupResolver(courseSchema) ,

    defaultValues: {
      courseTitle: "",
      description: "",
      courseSlug: "",
      coursePrice: 0,
      category: "",
      isFeatured: "false",
      isTrending: "false",
      isOnline: "false",
      imageSrc: "",
      prerequisites: [{ name: undefined }],
      learningObj: [{ name: undefined }],
      curriculum: [{ name: undefined }],
      video: "",
      duration: 0,
    },
  });

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
          <div onClick={handleOnClick}>
            {value ? (
              <div>
                <Image width={100} height={100} src={value} alt="House" />
              </div>
            ) : (
              <div onClick={handleOnClick}>
                <FileInput
                  placeholder="Upload  Image"
                  accept="image/*"
                  name="image"
                  register={register("imageSrc", { required: true })}
                  error={!!errors.imageSrc}
                />
                {!!errors.imageSrc && (
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
