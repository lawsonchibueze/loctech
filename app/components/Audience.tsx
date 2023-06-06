import React from "react";
import { Grid, Box, Typography } from "../lib/mui";

export default function Audience() {
  return (
    <Grid container item columnSpacing={{ xs: 3, md: 5 }} rowSpacing={1}>
      <Grid item>
        <Typography variant="h4" fontWeight="bold">
          Target Audience
        </Typography>
      </Grid>
      <Grid item>
        <ul style={{ padding: "0 2rem", fontSize: "15px" }}>
          <li style={{ listStyle: "disc", marginTop: "8px" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum,
            natus. Enim aspernatur corporis ipsa fuga, magni consequatur
          </li>
          <li style={{ listStyle: "disc", marginTop: "8px" }}>
            Lorem, ipsum olor sit amet consectetur aipisicing elit. Cum, natus.
            Enim aspernatur corporis ipsa fuga, magni consequatur
          </li>
          <li style={{ listStyle: "disc", marginTop: "8px" }}>
            Lorem, ipsum olor sit amet consectetur aipisicing elit. Cum, natus.
            Enim aspernatur corporis ipsa fuga, magni consequatur
          </li>
          <li style={{ listStyle: "disc", marginTop: "8px" }}>
            Lorem, ipsum olor sit amet consectetur aipisicing elit. Cum, natus.
            Enim aspernatur corporis ipsa fuga, magni consequatur
          </li>
          <li style={{ listStyle: "disc", marginTop: "8px" }}>
            Lorem, ipsum olor sit amet consectetur adipisicing elit. Cum, natur.
            Enid aspernatur corporis ipsa fuga, magni consequatur
          </li>
        </ul>
      </Grid>
    </Grid>
  );
}
