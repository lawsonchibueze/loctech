"use client";
import React from "react";
import { Box, Typography, Grid, useTheme, Button } from "../lib/mui";
tokens;
import Image from "next/image";
import { tokens } from "../lib/theme";

interface CardProps {
  title: string;
  subtitle: string;
  btnText: string;
}

export default function Card({ title, subtitle, btnText }: CardProps) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Grid
      container
      item
      sx={{
        p: "15px",
        backgroundColor: colors.grey[900],
        borderRadius: "8px",
      }}
    >
      <Grid item xs={8} container alignItems="center" direction="row">
        <Box>
          <Box>
            <Typography variant="h6">{subtitle}</Typography>
          </Box>
          <Box m="8px 0">
            <Typography variant="h4" fontWeight="bold">
              {title}
            </Typography>
          </Box>

          <Box>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: colors.rose[500],
                fontWeight: "bold",
                fontSize: "14px",
                color: colors.primary[900],
                "&:hover": {
                  backgroundColor: colors.rose[400],
                },
              }}
            >
              {btnText}
            </Button>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={4} container alignItems="center" direction="row">
        <Image
          src="/smiling-young-african-college-student-doing-KYGJVRW (1).png"
          width={300}
          height={300}
          alt="pexels-cottonbro-studio-5083408.png"
          style={{ width: "100%", borderRadius: "8px", objectFit: "cover" }}
        />
      </Grid>
    </Grid>
  );
}
