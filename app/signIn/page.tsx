"use client";
import React from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  useTheme,
} from ".././lib/mui";
import Google from "@mui/icons-material/Google";
import FacebookRounded from "@mui/icons-material/FacebookRounded";
import LinkedIn from "@mui/icons-material/LinkedIn";
import { tokens } from "../lib/theme";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import Link from "next/link";

export default function page() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
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
          <Typography variant="h3" fontWeight="bold">
            Welcome Back!
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5" fontWeight="bold">
            Hey, Enter your details to login into your account
          </Typography>
        </Box>
        <Grid container rowSpacing={4} m="2rem 0">
          {/* first input */}
          <Grid container item>
            <TextField id="email" label="Email" variant="outlined" fullWidth />
          </Grid>

          {/* second  input */}
          <Grid container item>
            <TextField
              className="passwordInput"
              id="password"
              label="Password"
              variant="outlined"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <Visibility />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .css-p51h6s-MuiInputBase-input-MuiOutlinedInput-input": {
                  outline: "none !important",
                  border: "none",
                  color: "red",
                },
              }}
            />
          </Grid>
        </Grid>
        {/*  */}
        <Grid container>
          <Typography textAlign="start" variant="h6" fontWeight="bold">
            Having trouble in sign in ?
          </Typography>
        </Grid>

        {/* button */}

        <Grid container m="1rem 0">
          <Button
            variant="contained"
            fullWidth
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
            Sign In
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
          <Typography m="5px"> Or Sign in with</Typography>{" "}
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
            Don't have an account?{" "}
            <Link
              href="/signup"
              style={{ textDecoration: "underline", color: colors.rose[500] }}
            >
              Create one
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
