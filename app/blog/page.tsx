import React from 'react'
import { Box, Grid } from '../lib/mui'
import Image from 'next/image'
import AnimatedRoute from '../components/AnimatedRoute'
import Card from '../components/BlogCard/Card'

export default function Blog() {
    const imageURL = "https://a6e8z9v6.stackpathcdn.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/title-comscience.jpg"
  return (
  <AnimatedRoute>
      <Grid container>
        <Image  src={imageURL} alt='image'  height={1000} width={1000} style={{width:"100%", height:"400px",}}/>

    </Grid>
    <Grid container item  sx={{ p: { xs: "10px 25px", md: "20px 50px" } }} rowSpacing={3} columnSpacing={{ xs: 0, md: 3 }}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </Grid>
  </AnimatedRoute>
  )
}
