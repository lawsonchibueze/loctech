"use client";
import React, { useEffect } from "react";
import { Grid, Button, useTheme } from "../lib/mui";
import { motion } from "framer-motion";
import { tokens } from "../lib/theme";
import Header from "../components/Header";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
export default function page() {
  const MotionBtn = motion(Button);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const router = useRouter();
  const { data: session } = useSession() as unknown as any;

  useEffect(() => {
    if (session?.user.role !== "ADMIN") {
      redirect("/"); //redirect if role is not ADMIN
    }
  },[session]);

  return (
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
    </Grid>
  );
}
