"use client";
import React from "react";
import { motion } from "framer-motion";
import { Box, Grid, Typography, useTheme, Button } from "../lib/mui";
import Image from "next/image";
import { HeroType } from "../types/_types";
import Link from "next/link";
import { useSession } from "next-auth/react";
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { tokens } from "../lib/theme";

interface HeroProps {
  data: HeroType[];
}
export default function Hero({ data }: HeroProps) {
  const MotionGrid = motion(Grid);
  const MotionBtn = motion(Button);
  const { data: session } = useSession() as unknown as any;

  // console.log(process.env.NEXT_PUBLIC_DEVELOPMENT_URL);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // console.log("color =========", colors.rose , "theme=========", theme)
  return (
    <>
      {data.map((hero) => (
        <Grid
          key={hero?.id}
          container
          spacing={2}
          sx={{
            flexDirection: { xs: "column-reverse", md: "row" },
          }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Box>
              <Typography variant="h1" fontWeight="bold">
                {hero.title}
              </Typography>
            </Box>
            <Box>
              <Typography variant="h3" fontWeight="bold" m="8px 0">
                {hero.subtitle}
              </Typography>
            </Box>
            <Box>
              <MotionBtn
                whileHover={{ scale: 1.1, backgroundColor: colors.rose[600]}}
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: colors.rose[500],
                  fontWeight: "bold",
                  fontSize: "18px",
                  color: "#fff",
             
                }}
              >
                {hero.button}
              </MotionBtn>
            </Box>

            {session?.user.role === "ADMIN" && (
              <Box>
                <Link href={`forms/heroUpload?id=${hero.id}`}>
                  <MotionBtn
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: colors.rose[600],
                    }}
                    variant="contained"
                    size="large"
                    sx={{
                      bgColor: colors.rose[500],
                      fontWeight: "bold",
                      fontSize: "18px",
                      color: colors.primary[900],
                      cursor: "pointer",
                      mt:"10px"
                    }}
                  >
                    <ModeEditOutlineOutlinedIcon/>
                    Update Hero
                  </MotionBtn>
                </Link>
              </Box>
            )}
          </Grid>
          <MotionGrid
            item
            xs={12}
            sm={6}
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ ease: "easeOut", duration: 2 }}
          >
            <Image
              src={hero.image}
              width={400}
              height={400}
              alt="pexels-cottonbro-studio-5083408.png"
              style={{
                width: "100%",
                borderRadius: "8px",
                height: "650px",
                objectFit: "cover",
              }}
            />
          </MotionGrid>
        </Grid>
      ))}
    </>
  );
}
