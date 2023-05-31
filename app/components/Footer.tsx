import React from "react";
import { Box, Grid, Typography } from "../lib/mui";
import Image from "next/image";
export default function Footer() {
  return (
    <Grid
      container
      rowSpacing={3}
      spacing={{ xs: 2, md: 3 }}
      columnSpacing={{ xs: 2, sm: 2, md: 2 }}
    >
      <Grid
        item
        md={3}
      
      >
        <Image src="/logo.png" width={120} height={120} alt="logo" />
        <Typography variant="h5" fontWeight="bold">
          Call us
        </Typography>
        <Typography>+234 703 888 5466</Typography>
        <Typography>
          {" "}
          4a Etim Okpoyo Close, Beside Total Petrol Station, Aba Road PH.
        </Typography>
        <Typography>customercare@loctechng.com</Typography>
      </Grid>

      <Grid item md={3}>
        <Typography variant="h5" fontWeight="bold">
          About Us
        </Typography>
        <Typography>Courses</Typography>
        <Typography>Instructor</Typography>
        <Typography>Events</Typography>
        <Typography>Become A Teacher</Typography>
      </Grid>

      <Grid item md={3}>
        <Typography variant="h5" fontWeight="bold">
          News & Blogs
        </Typography>
        <Typography>Library</Typography>
        <Typography>Gallery</Typography>
        <Typography>Partners</Typography>
        <Typography>Career</Typography>
      </Grid>

      <Grid item md={3}>
        <Typography variant="h5" fontWeight="bold">
          Support
        </Typography>
        <Typography>Documentation</Typography>
        <Typography>FAQs</Typography>
        <Typography>Forum</Typography>
        <Typography>Sitemap</Typography>
      </Grid>
    </Grid>
  );
}
