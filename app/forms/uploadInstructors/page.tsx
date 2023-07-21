"use client";
import Header from "@/app/components/Header";
import { Box, Grid, TextField, Typography } from "@/app/lib/mui";
import { instructorSchema } from "@/app/lib/yup";
import { InstructorType } from "@/app/types/_types";
import { ImageUpload } from "@/app/utils/ImageAndVideoUpload";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { MuiFileInput } from "mui-file-input";
import { useSession } from "next-auth/react";
import React, { ChangeEvent, useState } from "react";
import { Controller, useForm } from "react-hook-form";
export default function Page() {
  const { data: session } = useSession() as unknown as any;
  const [error, setError] = React.useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<InstructorType>({
    resolver: yupResolver(instructorSchema),
    defaultValues: {
      name: "",
      bio: "",
      email: "",
      rating: 3.5,
      reviews: "",
      facebook: "",
      twitter: "",
      instagram: "",
      linkedin: "",
      reviewer: "",
      reviewerImage: "",
      reviewerComment: "",
      instructorImage: "",
    },
  });

  const instructorImageSrc = watch("instructorImage");
  const reviewerImageSrc = watch("reviewerImage");

  const setCustomValue = (id: any, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };
  const onSubmitHandler = (values: InstructorType) => {
    const data = {
      ...values,
      image: instructorImageSrc,
      reviewerImage: reviewerImageSrc,
    };
console.log(data)
    if (session.user.role === "ADMIN") {
      axios
        .post("/api/instructors", data)
        .then((response) => {
          // Request was successful
          if (response.data) {
            console.log("Updated Seuccesfully");
            console.log(response.data);
            reset();
          }
        })
        .catch((error) => {
          // An error occurred
          setError("An error occurred");
          console.error("An error occured");
        });
    }
  };

  return (
    <Box sx={{ p: { xs: "10px 25px", md: "20px 50px" } }}>
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <Grid container rowSpacing={3} columnSpacing={3} mb="2rem">
        <Grid container item>
          <Header title="Add Instructor" btnText="Upload Instructor" />
          <hr />
        </Grid>
        <Grid container item xs={12} md={4}>
          <TextField
            id="name"
            error={!!errors.name}
            placeholder="JohnDoe"
            label="name"
            helperText={errors.name?.message}
            variant="outlined"
            autoComplete="false"
            fullWidth
            {...register("name")}
          />
        </Grid>

        <Grid container item xs={12} md={4}>
          <TextField
            id="email"
            error={!!errors.email}
            placeholder="JohnDoe @gmail.com"
            label="Email"
            helperText={errors.email?.message}
            variant="outlined"
            autoComplete="false"
            fullWidth
            {...register("email")}
          />
        </Grid>

        <Grid container item xs={12} md={4}>
          <TextField
            id="reviewer"
            placeholder="John"
            label="Reviewer"
            variant="outlined"
            autoComplete="false"
            fullWidth
            {...register("reviewer")}
          />
        </Grid>

        <Grid container item xs={12}>
          <TextField
            id="outlined-multiline-static"
            label="Bio"
            multiline
            placeholder="Instructor's bio"
            rows={10}
            fullWidth
            {...register("bio")}
          />
        </Grid>

        <Grid container item xs={12} md={4} rowSpacing={3} columnSpacing={3}>
          <Grid container item>
            <TextField
              id="rating"
              // error={!!errors.email}
              placeholder="4.5"
              label="Rating"
              // helperText={errors.email?.message}
              variant="outlined"
              autoComplete="false"
              fullWidth
              {...register("rating")}
            />
          </Grid>

          <Grid container item>
            <TextField
              id="facebook"
              // error={!!errors.email}
              placeholder="4.5"
              label="Facebook"
              // helperText={errors.email?.message}
              variant="outlined"
              autoComplete="false"
              fullWidth
              {...register("facebook")}
            />
          </Grid>

          <Grid container item>
            <TextField
              id="twitter"
              // error={!!errors.email}
              placeholder="4.5"
              label="Twitter"
              // helperText={errors.email?.message}
              variant="outlined"
              autoComplete="false"
              fullWidth
              {...register("twitter")}
            />
          </Grid>
        </Grid>

        <Grid container item xs={12} md={8}>
          <TextField
            id="outlined-multiline-static"
            label="Review"
            multiline
            placeholder="Instructor's review"
            rows={10}
            fullWidth
            {...register("reviews")}
          />
        </Grid>
        <Grid container item xs={12} md={12}>
          <TextField
            id="linkedin"
            label="Linkedin"
            placeholder="Linkedin"
            fullWidth
            {...register("linkedin")}
          />
        </Grid>

        <Grid container item xs={12} md={12}>
          <TextField
            id="outlined-multiline-static"
            label="Reviewer Comment"
            multiline
            placeholder="ReviewerComment"
            rows={10}
            fullWidth
            {...register("reviewerComment")}
          />
        </Grid>

        <Grid
          container
          item
          rowSpacing={3}
          columnSpacing={{ xs: 0, md: 3 }}
          direction="row"
        >
          <Grid item container xs={12} md={6}>
            <ImageUpload
              onChange={(value) => setCustomValue("reviewerImage", value)}
              value={reviewerImageSrc!}
              register={register}
              error={errors}
              placeholder="Reviewer Image"
            />
          </Grid>
          <Grid item container xs={12} md={6}>
            <ImageUpload
              onChange={(value) => setCustomValue("instructorImage", value)}
              value={instructorImageSrc!}
              register={register}
              error={errors}
              placeholder="Instructor Image"
            />
          </Grid>
        </Grid>
      </Grid>
    </form>
    </Box>
  );
}
