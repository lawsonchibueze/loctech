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
        container
        direction="column"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Image src="/logo.png" width={120} height={120} alt="logo" />
        <Typography variant="h5" fontWeight="bold">
          Call us
        </Typography>
        <Typography mt="10px">+234 703 888 5466</Typography>
        <Typography mt="10px">
          {" "}
          4a Etim Okpoyo Close, Beside Total Petrol Station, Aba Road PH.
        </Typography>
        <Typography mt="10px">customercare@loctechng.com</Typography>
      </Grid>

      <Grid
        item
        md={3}
        container
        direction="column"
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{ display: { xs: "none", sm: "none", md: "flex" } }}

      >
        <Typography mt="10px" variant="h5" fontWeight="bold">
          About Us
        </Typography>
        <Typography mt="10px">Courses</Typography>
        <Typography mt="10px">Instructor</Typography>
        <Typography mt="10px">Events</Typography>
        <Typography mt="10px">Become A Teacher</Typography>
      </Grid>

      <Grid
        item
        md={3}
        container
        direction="column"
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{ display: { xs: "none", sm: "none", md: "flex" } }}

      >
        <Typography mt="10px" variant="h5" fontWeight="bold">
          News & Blogs
        </Typography>
        <Typography mt="10px">Library</Typography>
        <Typography mt="10px">Gallery</Typography>
        <Typography mt="10px">Partners</Typography>
        <Typography mt="10px">Career</Typography>
      </Grid>

      <Grid
        item
        md={3}
        container
        direction="column"
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{ display: { xs: "none", sm: "none", md: "flex" } }}

      >
        <Typography mt="10px" variant="h5" fontWeight="bold">
          Support
        </Typography>
        <Typography mt="10px">Documentation</Typography>
        <Typography mt="10px">FAQs</Typography>
        <Typography mt="10px">Forum</Typography>
        <Typography mt="10px">Sitemap</Typography>
      </Grid>
    </Grid>
  );
}
