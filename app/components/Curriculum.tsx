"use client";
import React from "react";
import { Grid, Box, Typography } from "../lib/mui";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
export default function Curriculum() {
  return (
    <Grid
      item
      xs={12}
      md={8}
      m="2rem 0"
      columnSpacing={{ xs: 3, md: 5 }}
      rowSpacing={1}
    >
      <Grid container item justifyContent="space-between" alignItems="center">
        <Typography variant="h4" fontWeight="bold">
          Curriulum
        </Typography>
        <Typography fontWeight="bold">12 weeks</Typography>
      </Grid>
      <Grid item>
        <Grid
          container
          item
          justifyContent="space-between"
          alignItems="center"
          m="15px 0"
        >
          <Typography fontSize="16px" fontWeight="normal">
            {" "}
            DEfine a network
          </Typography>

          <Box>
            <LockOutlinedIcon />
          </Box>
        </Grid>
        <Grid
          container
          item
          justifyContent="space-between"
          alignItems="center"
          m="15px 0"
        >
          <Typography fontSize="16px" fontWeight="normal">
            {" "}
            DEfine a network
          </Typography>

          <Box>
            <LockOutlinedIcon />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
