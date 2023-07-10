import React from "react";
import { Grid, Box, Typography } from "../lib/mui";

interface PrerequisitesProp {
  prerequisites: string[];
}

export default function Perquisite({ prerequisites }: PrerequisitesProp) {
  return (
    <Grid
      container
      item
      columnSpacing={{ xs: 3, md: 5 }}
      rowSpacing={1}
      m="3rem 0"
    >
      <Grid item xs={12}>
        <Typography variant="h4" fontWeight="bold">
          Prerequisites
        </Typography>
      </Grid>
      <Grid item>
        <ul style={{ padding: "0 2rem", fontSize: "15px" }}>
          {prerequisites.map((item) => (
            <li key={item} style={{ listStyle: "disc", marginTop: "8px" }}>
              {item}
            </li>
          ))}
        </ul>
      </Grid>
    </Grid>
  );
}
