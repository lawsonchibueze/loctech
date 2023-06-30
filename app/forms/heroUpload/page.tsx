"use client";
import React, { ChangeEvent, useEffect } from "react";
import { Grid, TextField, Typography } from "../../lib/mui";
import Header from "@/app/components/Header";
import { Controller, useForm } from "react-hook-form";
import { HeroType } from "@/app/types/_types";
import { yupResolver } from "@hookform/resolvers/yup";
import { heroSchema } from "@/app/lib/yup";
import { useSession } from "next-auth/react";
import axios from "axios";
import { redirect, useRouter } from "next/navigation";
import { ImageUpload } from "@/app/utils/ImageAndVideoUpload";
export default function page() {
  const [error, setError] = React.useState("");
  const { data: session } = useSession() as unknown as any;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<HeroType>({
    resolver: yupResolver(heroSchema),
    defaultValues: {
      title: "",
      subtitle: "",
      button: "",
      image: "",
    },
  });
  const imageSrc = watch("image");


  const setCustomValue = (id: any, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  useEffect(() => {
    if (session?.user.role !== "ADMIN") {
      // if currrent user is not ADMIN redirect to HomePage
      redirect("/");
    }
  }, [session]);

  const onSubmitHandler = (values: HeroType) => {
    const data = { ...values, image: imageSrc };
    if (session.user.role === "ADMIN") {
      axios
        .post("/api/hero", data)
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
          console.error(error);
        });
    }
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
          <Grid container item xs={12}>
            <TextField
              fullWidth
              label="Button Text"
              {...register("button")}
              error={!!errors.button}
              helperText={errors.button?.message}
            />
          </Grid>
          {/* Image */}

          <>
            <Grid container item xs={12} md={12} direction="column">
              <ImageUpload
                onChange={(value) => setCustomValue("image", value)}
                value={imageSrc}
                register={register}
                error={errors}
                placeholder="Hero Image"
              />
              {!!errors.image && (
                <Typography color="red">This field is required</Typography>
              )}
            </Grid>
          </>
        </Grid>
        <Grid></Grid>
      </Grid>
    </form>
  );
}
