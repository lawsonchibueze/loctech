import React from "react";
import { Grid, Box, Typography } from "../lib/mui";

interface AudienceProp {
  target: string[];
}

export default function Audience({ target }: AudienceProp) {
  return (
    <Grid container item columnSpacing={{ xs: 3, md: 5 }} rowSpacing={1}>
      <Grid item xs={12}>
        <Typography variant="h4" fontWeight="bold">
          Target Audience
        </Typography>
      </Grid>
      <Grid item>
        <ul style={{ padding: "0 2rem", fontSize: "15px" }}>
          {target.map((target) => (
            <li key={target} style={{ listStyle: "disc", marginTop: "8px" }}>
              {target}
            </li>
          ))}
        </ul>
      </Grid>
    </Grid>
  );
}
