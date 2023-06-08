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
} from "@mui/icons-material";

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
              label="confirm password"
              variant="outlined"
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
  );
}
