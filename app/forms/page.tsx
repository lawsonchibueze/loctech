"use client";
import React, { useEffect } from "react";
import { Grid, Box } from "../lib/mui";
import Header from "../components/Header";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
export default function Page() {
  const router = useRouter();
  const { data: session } = useSession() as unknown as any;

  useEffect(() => {
    if (session?.user.role !== "ADMIN") {
     redirect("/"); //redirect if role is not ADMIN
    }
  },[session?.user.role, router]);

  return (

    <Box sx={{ p: { xs: "10px 25px", md: "20px 50px" } }}>
    <Grid container item>
      <Link href="/forms/uploadcourse" style={{ width: "100%" }}>
        <Header title="Upload Course" btnText="Upload Course" />
      </Link>
      <Link href="/forms/uploadInstructors" style={{ width: "100%" }}>
        <Header title="Upload Instructor" btnText="Upload Instructor" />
      </Link>
      <Link href="/forms/heroUpload" style={{ width: "100%" }}>
        <Header title="Upload Hero" btnText="Upload Hero" />
      </Link>
      <Link href="/forms/testimonial" style={{ width: "100%" }}>
        <Header title="Upload Testimonial" btnText="Upload Testimonial" />
      </Link>
      <Link href="/forms/blog" style={{ width: "100%" }}>
        <Header title="Upload Blog" btnText="Upload  Blog" />
      </Link>
    </Grid>
    </Box>
  );
}
