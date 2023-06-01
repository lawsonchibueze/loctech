"use client";
import React from "react";
import { Grid, Box, Typography, Button, useTheme } from "../lib/mui";
import { tokens } from "../lib/theme";
export default function PathCard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Grid
      container
      item
      xs={12}
      md={6}
      height="150px"
      p="15px"
      sx={{ backgroundColor: colors.grey[900] }}
    >
      <Grid
        container
        item
        xs={12}
        md={8}
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ alignItems: { xs: "center", md: "flex-start" } }}
      >
        <Typography variant="h4" fontWeight="bold">
          Let Us Help
        </Typography>
        <Typography variant="h3">
          Finding your{" "}
          <span style={{ fontWeight: "bolder" }}>Right Courses </span>{" "}
        </Typography>
      </Grid>

      <Grid
        container
        item
        xs={12}
        md={4}
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Button
          sx={{
            p: "10px 15px",
            backgroundColor: colors.rose[500],
            color:"#fff",
            fontSize: "18px",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: colors.rose[400],
            },
          }}
        >
          Get Started
        </Button>
      </Grid>
    </Grid>
  );
}
