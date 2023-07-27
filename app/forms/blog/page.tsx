"use client";
import Header from "@/app/components/Header";
import { Box, Grid, TextField } from "@/app/lib/mui";
import { postSchema } from "@/app/lib/yup";
import { PostType } from "@/app/types/_types";
import { ImageUpload } from "@/app/utils/ImageAndVideoUpload";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useSession } from "next-auth/react";
import React from "react";
import { useForm } from "react-hook-form";

export default function Page() {
  const { data: session } = useSession() as unknown as any;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<PostType>({
    resolver: yupResolver(postSchema),
    defaultValues: {
      title: "",
      subtitle: "",
      postSlug: "",
      image: "",
      content: "",
      author: "",
    },
  });
  const postImgSrc = watch("image");

  const setCustomValue = (id: any, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const onSubmitHandler = (values: PostType) => {
    const data = {
      ...values,
      image: postImgSrc,
      author: { name: values.author },
    };
    console.log(data)
    if (session.user.role === "ADMIN") {
      axios
        .post(`/api/post`, data)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          // An error occurred
          // setError("An error occurred");
          console.error(error);
        });
    }
  };

  return (
    <Box sx={{ p: { xs: "10px 25px", md: "20px 50px" } }}>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Header title="Add Blog" btnText="Add  Blog" />
        <Grid container m="1rem 0">
          <Grid container item rowSpacing={3} columnSpacing={{ xs: 0, md: 3 }}>
            <Grid container item xs={12} xl={6}>
              <TextField
                fullWidth
                label="Title"
                {...register("title", {
                  required: "Field is required",
                })}
                error={!!errors.title}
                helperText={errors.title?.message}
              />
            </Grid>
            <Grid container item xs={12} xl={6}>
              <TextField
                fullWidth
                label="Slug"
                {...register("postSlug", {
                  required: "Field is required",
                })}
                error={!!errors.postSlug}
                helperText={errors.postSlug?.message}
              />
            </Grid>
            <Grid container item xs={12} xl={6}>
              <TextField
                fullWidth
                label="Author"
                {...register("author", {
                  required: "Field is required",
                })}
                error={!!errors.author}
                helperText={errors.author?.message}
              />
            </Grid>

            <Grid item container xs={12} md={6}>
              <ImageUpload
                onChange={(value) => setCustomValue("image", value)}
                value={postImgSrc!}
                register={register}
                error={errors}
                placeholder="Post Image"
              />
            </Grid>

            <Grid container item xs={12}>
              <TextField
                id="outlined-multiline-static"
                label="subtitle"
                multiline
                placeholder="Subtitle"
                rows={10}
                fullWidth
                {...register("subtitle", {
                  required: "Field is required",
                })}
                error={!!errors.subtitle}
                helperText={errors.subtitle?.message}
              />
            </Grid>

            <Grid container item xs={12}>
              <TextField
                id="outlined-multiline-static"
                label="Content"
                multiline
                placeholder="Content"
                rows={20}
                fullWidth
                {...register("content", {
                  required: "Field is required",
                })}
                error={!!errors.content}
                helperText={errors.content?.message}
              />
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
