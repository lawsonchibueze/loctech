import { PostType } from "@/app/types/_types";
import React from "react";
import Card from "./Card";
import prisma from "@/prisma/prisma";
interface CardItemProps {
  blogs: PostType[];
}

export default function CardItem({ blogs }: CardItemProps) {
  return (
    <>
      {blogs.map((blog, index) => (
        <Card
          key={`${index} + ${blog.title}`}
          blog={{
            title: blog.title,
            subtitle: blog.subtitle,
            postSlug: blog.postSlug,
            image: blog.image,
            content: blog.content,
            author: blog.author,
            createdAt: blog.createdAt,
          
          }}
        />
      ))}
    </>
  );
}
