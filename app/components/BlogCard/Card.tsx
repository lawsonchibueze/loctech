"use client"
import { Box, Button, Grid, Typography, useTheme } from "@/app/lib/mui";
import { tokens } from "@/app/lib/theme";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function Card() {
  const imageURL =
    "https://a6e8z9v6.stackpathcdn.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/title-comscience.jpg";

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const MotionBtn = motion(Button);
  return (
    <Grid container item xs={12} md={6} height="850px"  m="10px 0">
      <Box>
        <Image
          src={imageURL}
          alt="image"
          height={1000}
          width={1000}
          style={{ width: "100%", height: "500px", objectFit: "cover" }}
        />
      </Box>
      <Grid m="10px 0">
        <Typography variant="h2" fontWeight="bold">
          The Florida Project: Taking Action to Help Kids Like Moonee
        </Typography>
        <Typography m="10px 0">
          <span> JUNE 6, 2016 </span> <span>/ BY JAMES SMITH </span>{" "}
          <span> / BLOG / 0</span>
        </Typography>

        <Typography variant="h5">
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart. I am
          alone, and feel the charm of existence in this spot, which was created
          for the bliss of souls like mine. I am so happy, my dear friend, so
          absorbed in the exquisite sense of mere tranquil existence, that I
          neglect my talents. I should be...
        </Typography>
      </Grid>
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
               Read More
              </MotionBtn>
    </Grid>
  );
}
