"use client";
import AnimatedRoute from "@/app/components/AnimatedRoute";
import { Box, Grid, Typography, useTheme } from "@/app/lib/mui";
import React from "react";
import prisma from "@/prisma/prisma";
import { notFound, redirect, useRouter } from "next/navigation";
import Image from "next/image";
import CustomButton from "@/app/components/Button";
import { PostType } from "@/app/types/_types";
import { tokens } from "@/app/lib/theme";
import Link from "next/link";

type PageProps = {
  params: {
    slug: string;
  };
};

async function getPostDetail(slug: string) {
  const res = await fetch("/api/post/" + slug, {
    method: "GET",
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return await res.json();
}

export default async function Page({ params }: PageProps) {
  const postSlug = params.slug;
  const router = useRouter();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const blog: PostType = await getPostDetail(postSlug);
  const [blogData] = await Promise.all([blog]);
  const DeleteCourse = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const res = await fetch("/api/post/" + postSlug, {
      method: "DELETE",
      cache: "no-cache",
    });
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    router.back();
    console.log("Button clicked!");
  };

  if (!blogData) {
    notFound();
  }

  return (
    <AnimatedRoute>
      <Box sx={{ p: { xs: "10px 25px", md: "20px 50px" } }}>
        <Box m="15px 0">
          <Typography variant="h5" fontWeight="bold" color={colors.rose[500]}>
            <span className="mr-3">Loctech</span> &gt;
            <span className="ml-3 mr-3 "> Blog </span> <span>&gt; </span>{" "}
            <span className="ml-3"> {blogData.title} </span>
          </Typography>
        </Box>

        <Box width="100%">
          <Image
            src={blogData.image!}
            alt="image"
            height={1000}
            width={1000}
            style={{ width: "100%", height: "500px", objectFit: "cover" }}
          />
        </Box>
        <Box mt="20px">
          <Typography
            variant="h5"
            sx={{
              lineHeight: "2",
            }}
          >
            {blogData.content}
          </Typography>
        </Box>
        <Grid
          container
          item
          columnSpacing={{ xs: 3, md: 5 }}
          rowSpacing={1}
          mt="2rem "
        >
          <CustomButton
            title="Delete blog"
            onClick={DeleteCourse}
            sx={{
              backgroundColor: "#ff539c",
              fontWeight: "bold",
              fontSize: "18px",
              color: "#fff",
              m: "0 15px",
            }}
          />

          <Link href={`/forms/blog?slug=${postSlug}`}>
            <CustomButton
              title="Update blog"
              sx={{
                backgroundColor: "#ff539c",
                fontWeight: "bold",
                fontSize: "18px",
                color: "#fff",
                m: "0 15px",
              }}
            />
          </Link>
        </Grid>
      </Box>
    </AnimatedRoute>
  );
}
