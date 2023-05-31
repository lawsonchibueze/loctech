import { Box, Grid, Typography } from "@/app/lib/mui";
import React from "react";
import Image from "next/image";
interface SubjectCardProps {
  src: string;
  alt: string;
  title: string;
}

export default function SubjectCard({ src, alt, title }: SubjectCardProps) {
  return (
    <Grid
      item
      container
      xs={12}
      sm={5.6}
      md={2.2}
      width="250px"
      position="relative"
    >
      <Image
        src={src}
        alt={alt}
        width={200}
        height={200}
        style={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          height: "100%",
          width: "100%",
          backgroundImage: "linear-gradient(to top, black, transparent)",
        }}
      ></Box>
      <Typography
        variant="h4"
        sx={{
          position: "absolute",
          bottom: "10%",
          left: "40%",
          fontWeight: "bold",
          color: "#fff",
        }}
      >
        {title}
      </Typography>
    </Grid>
  );
}
