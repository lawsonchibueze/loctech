import AnimatedRoute from "@/app/components/AnimatedRoute";
import { Box, Typography } from "@/app/lib/mui";
import React from "react";
import prisma from "@/prisma/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";

type PageProps = {
  params: {
    slug: string;
  };
};

async function getPostDetail(slug: string) {
  const post = await prisma.post.findMany({
    where: {
      postSlug: slug,
    },
  });

  if (!post) {
    return null;
  }

  return post;
}

export default async function Page({ params }: PageProps) {
  const postSlug = params.slug;

  const blogData = await getPostDetail(postSlug);
  console.log(blogData);
  if (!blogData) {
    notFound();
  }

  return (
    <AnimatedRoute>
      <Box sx={{ p: { xs: "10px 25px", md: "20px 50px" } }}>
        <Box m="15px 0">
          <span>Blog</span>/ <span>{blogData[0].title} </span>
        </Box>

        <Box width="100%">
          <Image
            src={blogData[0].image!}
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
            {blogData[0].content}
          </Typography>
        </Box>
      </Box>
    </AnimatedRoute>
  );
}
