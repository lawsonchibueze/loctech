"use client";
import Header from "@/app/components/Header";
import { Grid, TextField, Typography } from "@/app/lib/mui";
import { testimonialSchema } from "@/app/lib/yup";
import { TestimonialType } from "@/app/types/_types";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { ChangeEvent } from "react";
import { Controller, useForm } from "react-hook-form";

export default function page() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TestimonialType>({
    resolver: yupResolver(testimonialSchema),
    defaultValues: {
      name: "",
      image: "",
      review: "",
    },
  });

  const onSelectImageHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
  };

  const onSubmitHandler = (values: TestimonialType) => {
    console.log({ ...values });
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <Header title="Add Testimonial" btnText="Add Testimonial" />
      <Grid container m="1rem 0">
        <Grid container item rowSpacing={3} columnSpacing={{ xs: 0, md: 3 }}>
          <Grid container item xs={12}>
            <TextField
              fullWidth
              label="Title"
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          </Grid>

          {/* Review */}
          <Grid container item xs={12}>
            <TextField
              id="outlined-multiline-static"
              rows={10}
              placeholder="Review"
              multiline
              fullWidth
              label="Review"
              {...register("review")}
              error={!!errors.review}
              helperText={errors.review?.message}
            />
          </Grid>

          {/* Image */}

          <Controller
            name="image"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <>
                <Grid container item xs={12} md={6} direction="column">
                  <input
                    type="file"
                    id="Review"
                    accept="image"
                    onChange={field.onChange}
                  />
                  {!!errors.image && (
                    <Typography color="red">This field is required</Typography>
                  )}
                </Grid>
              </>
            )}
          />
        </Grid>
        <Grid></Grid>
      </Grid>
    </form>
  );
}
