"use client";
import React from "react";
import { motion } from "framer-motion";
import { Box, Grid, Typography, useTheme, Button } from "../lib/mui";
import Image from "next/image";
import { tokens } from "../lib/theme";
import Card from "./Card";
tokens;
export default function Hero() {
  const MotionGrid = motion(Grid);
  const MotionBtn = motion(Button);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Grid
      container
      spacing={2}
      sx={{
        flexDirection: { xs: "column-reverse", md: "row" },
      }}
    >
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box>
          <Typography variant="h1" fontWeight="bold">
            Scholarship 2023
          </Typography>
        </Box>
        <Box>
          <Typography variant="h3" fontWeight="bold" m="8px 0">
            Get 100% Scholarship for any course of your choice
          </Typography>
        </Box>
        <Box>
          <MotionBtn
            whileHover={{ scale: 1.1, backgroundColor: colors.rose[600] }}
            variant="contained"
            size="large"
            sx={{
              backgroundColor: colors.rose[500],
              fontWeight: "bold",
              fontSize: "18px",
              color: colors.primary[900],
              cursor: "pointer",
            }}
          >
            Register Now
          </MotionBtn>
        </Box>
      </Grid>
      <MotionGrid
        item
        xs={12}
        sm={6}
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <Image
          src="/smiling-young-african-college-student-doing-KYGJVRW (1).png"
          width={400}
          height={300}
          alt="pexels-cottonbro-studio-5083408.png"
          style={{ width: "100%", borderRadius: "8px" }}
        />
      </MotionGrid>
    </Grid>
  );
}
