import React from "react";
import { Grid, Box, Typography } from "../lib/mui";

interface ObjectivesProp {
  objectives: string[];
}

export default function Objectives({ objectives }: ObjectivesProp) {
  return (
    <Grid
      container
      item
      columnSpacing={{ xs: 3, md: 5 }}
      rowSpacing={1}
      mt="2rem "
    >
      <Grid item xs={12}>
        <Typography variant="h4" fontWeight="bold">
          Learn Objectives
        </Typography>
      </Grid>
      <Grid item>
        <ul style={{ padding: "0 2rem", fontSize: "15px" }}>
          {objectives.map((item) => (
            <li key={item} style={{ listStyle: "none", marginTop: "8px" }}>
              {item}
            </li>
          ))}
        </ul>
      </Grid>
    </Grid>
  );
}
