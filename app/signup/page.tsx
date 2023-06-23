"use client";
import React from "react";
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  Link,
  TextField,
  Typography,
  useTheme,
} from "../lib/mui";
import { tokens } from "../lib/theme";
import {
  Visibility,
  Google,
  FacebookRounded,
  LinkedIn,
  Password,
} from "@mui/icons-material";
import axios from "axios";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpSchema } from "../lib/yup";
import { SignUpType } from "../types/_types";

export default function Page() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpType>({
    resolver: yupResolver(SignUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const formSubmitHandler = (value: SignUpType) => {
    const emailToLowerCase = value.email.toLowerCase();
    const data = {
      name: value.name,
      email: emailToLowerCase,
      password: Password,
    };

    axios
      .post("/api/register", data)
      .then((response) => {
        // Request was successful
        console.log(response.data);
      })
      .catch((error) => {
        // An error occurred
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit(formSubmitHandler)}>
      <Grid container item md={12} justifyContent="center" m="2rem 0">
        <Grid
          item
          container
          // justifyContent="center"
          direction="column"
          alignItems="center"
          md={4}
          padding="2rem"
          borderRadius="8px"
          sx={{ backgroundColor: colors.primary[100] }}
        >
          <Box m="1.5rem 0">
            <Typography variant="h3" fontWeight="bold" fontStyle="italic">
              Hello!
            </Typography>
          </Box>
          <Box>
            <Typography variant="h5" fontWeight="bold">
              Create your account
            </Typography>
          </Box>
          <Grid container rowSpacing={4} m="2rem 0">
            <Grid container item>
              <TextField
                id="name"
                error={!!errors.name}
                placeholder="JohnDoe"
                label="Name"
                helperText={errors.name?.message}
                variant="outlined"
                autoComplete="false"
                fullWidth
                {...register("name")}
              />
            </Grid>

            {/* first input */}
            <Grid container item>
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

            {/* second  input */}
            <Grid container item>
              <TextField
                className="passwordInput"
                id="password"
                label="Password"
                variant="outlined"
                autoComplete="false"
                // type="password"
                {...register("password")}
                helperText={errors.password?.message}
                error={!!errors.password}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Visibility />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            {/*  */}

            <Grid container item>
              <TextField
                id="consfirmpassword"
                label="Confirm password"
                variant="outlined"
                autoComplete="false"
                // type="password"
                {...register("confirmPassword")}
                helperText={errors.confirmPassword?.message}
                error={!!errors.confirmPassword}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Visibility />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          {/*  */}

          {/* button */}

          <Grid container m="1rem 0">
            <Button
              variant="contained"
              fullWidth
              type="submit"
              sx={{
                textTransform: "none",
                fontWeight: "bold",
                color: "#fff",
                p: "10px",
                backgroundColor: colors.rose[500],
                "&:hover": {
                  backgroundColor: colors.rose[600],
                },
              }}
            >
              Sign Up
            </Button>
          </Grid>
          {/*  */}

          <Grid
            container
            item
            alignItems="center"
            justifyContent="center"
            m="1rem 0"
          >
            <hr style={{ border: "1px solid black", width: "20px" }} />
            <Typography m="5px"> Or Sign up with</Typography>{" "}
            <hr style={{ border: "1px solid black", width: "20px" }} />
          </Grid>

          {/* buttons */}
          <Grid container rowSpacing={2} columnSpacing={2}>
            <Grid container item md={4} sm={12}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  textTransform: "none",
                  fontWeight: "bold",
                  color: "#fff",
                  backgroundColor: colors.rose[500],
                  "&:hover": {
                    backgroundColor: colors.rose[600],
                  },
                }}
              >
                {" "}
                <Google />
                Google{" "}
              </Button>
            </Grid>

            {/*  */}
            <Grid container item md={4} sm={12}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  textTransform: "none",
                  fontWeight: "bold",
                  color: "#fff",
                  backgroundColor: colors.rose[500],
                  "&:hover": {
                    backgroundColor: colors.rose[600],
                  },
                }}
              >
                {" "}
                <FacebookRounded />
                Facebook{" "}
              </Button>
            </Grid>
            {/*  */}
            <Grid container item md={4} sm={12}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  textTransform: "none",
                  fontWeight: "bold",
                  color: "#fff",
                  backgroundColor: colors.rose[500],
                  "&:hover": {
                    backgroundColor: colors.rose[600],
                  },
                }}
              >
                {" "}
                <LinkedIn />
                LinkedIn{" "}
              </Button>
            </Grid>
          </Grid>

          <Grid container justifyContent="center" m="1rem 0">
            <Typography>
              Already have an account?{" "}
              <Link
                href="/signIn"
                style={{ textDecoration: "underline", color: colors.rose[500] }}
              >
                Log in
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}
