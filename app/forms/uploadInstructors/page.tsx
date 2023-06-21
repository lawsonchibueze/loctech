"use client";
import Header from "@/app/components/Header";
import { Grid, TextField } from "@/app/lib/mui";
import { instructorSchema } from "@/app/lib/yup";
import { InstructorType } from "@/app/types/_types";
import { yupResolver } from "@hookform/resolvers/yup";
import { MuiFileInput } from "mui-file-input";
import React, { ChangeEvent, useState } from "react";
import { Controller, useForm } from "react-hook-form";
export default function page() {
  const [instructorImage, setInstructorImage] = useState<File>();
  const [reviewerImage, setReviewerImage] = useState<File>();

  const {
    register,
    handleSubmit,
    formState: { errors },
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
    },
  });

  const onSubmitHandler = (values: InstructorType) => {
    console.log({ ...values, image: instructorImage, reviewerImage });
  };

  const onSelectInstructorsImageHandler = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    setInstructorImage(file);
  };

  const onSelectReviewersImageHandler = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    setReviewerImage(file);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <Grid container rowSpacing={3} columnSpacing={3}>
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
          <input
            type="file"
            {...register("image")}
            id="fileInput"
            accept="image"
            className="custom-file-input"
            onChange={onSelectInstructorsImageHandler}
          />
          <label htmlFor="fileInput" className="custom-file-label">
            {instructorImage ? (
              <p>{instructorImage.name} </p>
            ) : (
              "Instructors Image"
            )}
          </label>
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

        <Grid container item xs={12} md={6}>
          <input
            type="file"
            {...register("reviewerImage")}
            id="ReviewerImage"
            accept="image"
            className="custom-file-input"
            onChange={onSelectReviewersImageHandler}
          />
          <label htmlFor="ReviewerImage" className="custom-file-label">
            {reviewerImage ? <p>{reviewerImage.name} </p> : "Reviewer Image"}
          </label>
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField
            id="reviewerComment"
            // error={!!errors.email}
            placeholder="4.5"
            label="ReviewerComment"
            // helperText={errors.email?.message}
            variant="outlined"
            autoComplete="false"
            fullWidth
          />
        </Grid>
      </Grid>
    </form>
  );
}
