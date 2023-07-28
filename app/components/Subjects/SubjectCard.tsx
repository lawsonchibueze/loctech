"use client";
import { Box, Grid, Typography } from "@/app/lib/mui";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

interface SubjectCardProps {
  src: string;
  alt: string;
  title: string;
  params: string;
}

export default function SubjectCard({
  src,
  alt,
  title,
  params,
}: SubjectCardProps) {
  const MotionGrid = motion(Grid);

  return (
    <MotionGrid
      whileHover={{ scale: 1.1 }}
      item
      container
      xs={12}
      sm={5.6}
      md={2.2}
      width="250px"
      position="relative"
    >
      <Link href={`/category?category=${params}`} style={{ width: "100%" }}>
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
          placeholder="blur"
          blurDataURL="/spinner.svg"
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
        <Grid container justifyContent="center">
          <Typography
            variant="h4"
            sx={{
              position: "absolute",
              bottom: "10%",
              padding: "0 10px",
              textAlign: "center",
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            {title}
          </Typography>
        </Grid>
      </Link>
    </MotionGrid>
  );
}
