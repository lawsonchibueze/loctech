"use client";
import React, { ChangeEvent } from "react";
import { Grid, TextField, Typography } from "../../lib/mui";
import Header from "@/app/components/Header";
import { Controller, useForm } from "react-hook-form";
import { HeroType } from "@/app/types/_types";
import { yupResolver } from "@hookform/resolvers/yup";
import { heroSchema } from "@/app/lib/yup";
export default function page() {
  const [image, setImage] = React.useState<File>();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<HeroType>({
    resolver: yupResolver(heroSchema),
    defaultValues: {
      title: "",
      subtitle: "",
      button: "",
      image: "",
    },
  });

  const onSelectImageHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setImage(file);
  };

  const onSubmitHandler = (values: HeroType) => {
    console.log({ ...values });
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <Header title="Add Hero" btnText="Add Hero Text" />
      <Grid container m="1rem 0">
        <Grid container item rowSpacing={3} columnSpacing={{ xs: 0, md: 3 }}>
          <Grid container item xs={12} md={6}>
            <TextField
              fullWidth
              label="Title"
              {...register("title")}
              error={!!errors.title}
              helperText={errors.title?.message}
            />
          </Grid>
          {/* subtitle */}
          <Grid container item xs={12} md={6}>
            <TextField
              fullWidth
              label="Subtitle"
              {...register("subtitle")}
              error={!!errors.subtitle}
              helperText={errors.subtitle?.message}
            />
          </Grid>
          {/* ButtonText */}
          <Grid container item xs={12} md={6}>
            <TextField
              fullWidth
              label="Button Text"
              {...register("button")}
              error={!!errors.button}
              helperText={errors.button?.message}
            />
          </Grid>
          {/* Image */}

          <Controller
            name="image"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <>
                <Grid container item xs={12} md={6}>
                  <input
                    type="file"
                    id="ReviewerImage"
                    accept="image"
                    onChange={field.onChange}
                  />
                </Grid>
              </>
            )}
          />
          {!!errors.image && (
            <Typography color="red">This field is required</Typography>
          )}
        </Grid>
        <Grid></Grid>
      </Grid>
    </form>
  );
}
