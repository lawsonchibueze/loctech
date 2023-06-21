"use client";
import React, { ChangeEvent } from "react";
import { Grid, TextField } from "../../lib/mui";
import Header from "@/app/components/Header";
import { useForm } from "react-hook-form";
import { HeroType } from "@/app/types/_types";
import { yupResolver } from "@hookform/resolvers/yup";
import { heroSchema } from "@/app/lib/yup";
export default function page() {
  const [image, setImage] = React.useState<File>();
  const {
    register,
    handleSubmit,
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
    console.log({ ...values, image });
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <Header title="Add Hero" btnText="Add Hero Text" />
      <Grid container m="1rem 0">
        <Grid container item rowSpacing={3} columnSpacing={{ xs: 0, md: 3 }}>
          <Grid container item xs={12} md={6}>
            <TextField fullWidth label="Title" {...register("title")} />
          </Grid>
          {/* subtitle */}
          <Grid container item xs={12} md={6}>
            <TextField fullWidth label="Subtitle" {...register("subtitle")} />
          </Grid>
          {/* ButtonText */}
          <Grid container item xs={12} md={6}>
            <TextField fullWidth label="Button Text" {...register("button")} />
          </Grid>
          {/* Image */}

          <Grid container item xs={12} md={6}>
            <input
              type="file"
              {...register("image")}
              id="ReviewerImage"
              accept="image"
              className="custom-file-input"
              onChange={onSelectImageHandler}
            />
            <label htmlFor="ReviewerImage" className="custom-file-label">
              {image ? <p>{image.name} </p> : "Select an Image"}
            </label>
          </Grid>
        </Grid>
        <Grid></Grid>
      </Grid>
    </form>
  );
}
