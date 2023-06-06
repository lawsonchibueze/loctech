"use client";
import React from "react";
import { Grid, Box, Typography, useTheme, Button } from "../lib/mui";
import { tokens } from "@/app/lib/theme";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Newsletter() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const MotionBtn = motion(Button);

  return (
    <Grid
      container
      height="350px"
      sx={{ backgroundColor: colors.grey[900], m: "2rem 0", p: { xs: "1rem" } }}
    >
      <Grid
        container
        item
        xs={12}
        sm={12}
        md={7}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box sx={{ textAlign: { xs: "center", md: "start" } }}>
          <Typography variant="h4" fontWeight="bold">
            {" "}
            Achieve Your Goals With Loctech IT Training Institute
          </Typography>
          <Typography variant="h5" m="8px">
            Create an account to receive our newsletter, course recommendations
            and promotions.
          </Typography>

          <MotionBtn
            whileHover={{ scale: 1.1, backgroundColor: colors.rose[600] }}
            sx={{
              p: "10px 15px",
              backgroundColor: colors.rose[500],
              color: "#fff",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Register for free
          </MotionBtn>
        </Box>
      </Grid>

      <Grid
        container
        item
        xs={12}
        md={5}
        alignItems="center"
        justifyContent="center"
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        <Image
          src="/smiling-young-african-college-student-doing-KYGJVRW (1).png"
          alt=""
          width={200}
          height={200}
          style={{
            objectFit: "cover",
            borderRadius: "8px",
            width: "300px",
          }}
        />
      </Grid>
    </Grid>
  );
}
