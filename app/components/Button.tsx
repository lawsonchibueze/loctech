"use client";
import React from "react";
import { Button, SxProps, useTheme } from "../lib/mui";
import { tokens } from "../lib/theme";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";

interface ButtonType {
  title: string;
  sx: SxProps;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function CustomButton({ title, sx, onClick }: ButtonType) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const MotionBtn = motion(Button);
  const { data: session } = useSession() as unknown as any;

  return (
    <>
      {session?.user.role === "ADMIN" && (
        <MotionBtn
          whileHover={{
            scale: 1.1,
            backgroundColor: colors.rose[600],
          }}
          variant="contained"
          size="large"
          sx={{ ...sx, backgroundColor: colors.rose[500] }}
          onClick={onClick}
        >
          {title}
        </MotionBtn>
      )}
    </>
  );
}
