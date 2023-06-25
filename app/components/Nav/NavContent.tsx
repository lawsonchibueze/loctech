"use client";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Toolbar,
  useTheme,
} from "@/app/lib/mui";
import React, { useContext, useState } from "react";
import NavItem from "./NavItem";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { ColorModeContext, tokens } from "@/app/lib/theme";
import { useSession } from "next-auth/react";
export default function NavContent() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [toggle, setToggle] = useState<Boolean>(false);

  const { data: session } = useSession();
  console.log(session);
  

  const handleDrawer = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ justifyContent: { xs: "start", sm: "none", md: "block" } }}
          >
            <Grid item xs={2} md={4}>
              {/* Content for the left side */}
              <Box display="flex">
                <IconButton
                  onClick={handleDrawer}
                  sx={{ display: { sm: "block", md: "none" } }}
                >
                  <MenuIcon />
                </IconButton>
                <Image src="/logo.png" width={120} height={120} alt="logo" />
              </Box>
            </Grid>

            <Grid
              item
              container
              xs={7}
              md={8}
              sx={{ display: { xs: "none", sm: "none", md: "block" } }}
            >
              {/* Content for the right side */}

              <Box display="flex" alignItems="center">
                <IconButton>
                  <SearchIcon sx={{ fontSize: "20px" }} />
                </IconButton>

                <IconButton onClick={colorMode.toggleColorMode}>
                  {theme.palette.mode === "light" ? (
                    <LightModeOutlinedIcon />
                  ) : (
                    <DarkModeOutlinedIcon />
                  )}
                </IconButton>
                <NavItem title="Home" to="/" />
                <NavItem title="Courses" to="/courses" />

                <NavItem title="About us" to="/" />
                <NavItem title="Forms" to="/forms" />

                <NavItem title="Instructors" to="/instructor/instructors" />

                <NavItem title="SignIn" to="/signIn" />
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
      {toggle && (
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            alignItems="start"
          >
            <Grid
              container
              justifyContent={{ xs: "flex-start", md: "flex-end" }}
            >
              <IconButton>
                <SearchIcon sx={{ fontSize: "20px" }} />
              </IconButton>
            </Grid>

            <Grid
              container
              justifyContent={{ xs: "flex-start", md: "flex-end" }}
            >
              <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === "light" ? (
                  <LightModeOutlinedIcon />
                ) : (
                  <DarkModeOutlinedIcon />
                )}
              </IconButton>
            </Grid>

            <NavItem title="Home" to="/" />
            <NavItem title="Courses" to="/" />

            <NavItem title="About us" to="/" />

            <NavItem title="Instructors" to="/instructor/instructors" />
          </Box>
        </Box>
      )}
    </>
  );
}
