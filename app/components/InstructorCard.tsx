import React from "react";
import { Grid, Typography } from "../lib/mui";
import Image from "next/image";
export default function InstructorCard() {
  return (
    <Grid container item xs={12} md={6} lg={4} direction="row" >
      <Grid  item xs={12} md={3}>
        <Image
          height={100}
          width={100}
          alt="Instructor image "
          src="https://loctech-web-app-sandy.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Floctechapps%2Fimage%2Fupload%2Fv1680781373%2Finstructor%2FAlali_vrqfrb.jpg&w=640&q=75"
        />
      </Grid>
      <Grid item xs={12} md={9} p="0 5px">
        <Typography variant="h4" fontWeight="bold">Lawson Chibueze</Typography>
        <Typography sx={{m:"8px 0"}}>5/5.5</Typography>
        <Typography className="line-clamp-2" >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
          sapiente facilis rem error saepe, ab asperiores eligendi dolor rerum
          nihil ipsam omnis cupiditate sed voluptatem id praesentium modi quos
          in.
        </Typography>
      </Grid>
    </Grid>
  );
}
