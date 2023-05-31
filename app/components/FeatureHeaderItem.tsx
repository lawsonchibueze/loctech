"use client";
import React from "react";
import Link from "next/link";
import { Box, Typography, useTheme } from "../lib/mui";
import { tokens } from "../lib/theme";
import { useSearchParams } from "next/navigation";

interface FeatureHeaderItemProps {
  param: string;
  title: string;
}

export default function FeatureHeaderItem({
  title,
  param,
}: FeatureHeaderItemProps) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  return (
    <Link href={`/?category=${param}`}>
      <Box
        sx={{
          borderBottom:
            category && category === param
              ? `2px solid ${colors.rose[500]}`
              : "",
        }}
      >
        <Typography variant="h5">{title}</Typography>
      </Box>
    </Link>
  );
}
