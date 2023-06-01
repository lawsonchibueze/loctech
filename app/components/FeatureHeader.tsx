"use client";
import React from "react";
import { Box, Typography, useTheme, Grid } from "../lib/mui";
import FeatureHeaderItem from "./FeatureHeaderItem";

interface FeatureHeaderProps{
  title: string
}

export default function FeatureHeader({title}:FeatureHeaderProps) {
  return (
    <Grid container justifyContent="center" m="25px 0">
        <Typography variant="h3" fontWeight="bold">
          {title}
        </Typography>
    

      {/* <Grid
        container
        item
        xs={12}
        md={5}
        direction="row"
        justifyContent="space-between"
      >
        <FeatureHeaderItem title="All" param="all" />

        <FeatureHeaderItem
          title="Office productivity"
          param="office_productivity"
        />
        <FeatureHeaderItem title="Data Science" param="data_science" />
        <FeatureHeaderItem title="Featured" param="featured" />
        <FeatureHeaderItem title="Art & Design" param="design" />
      </Grid> */}
    </Grid>
  );
}
