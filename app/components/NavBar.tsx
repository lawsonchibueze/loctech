"use client";
import React, { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import CategoryIcon from "@mui/icons-material/Category";
import SearchIcon from "@mui/icons-material/Search";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

import Link from "next/link";
import {
  Grid,
  useTheme,
  Box,
  Typography,
} from "../lib/mui";
import { ColorModeContext, tokens } from "../lib/theme";

function NavBar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [toggle, setToggle] = useState<Boolean>(false);

  const handleDrawer = () => {
    setToggle(!toggle);
  };

  console.log(theme.palette.mode);
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: colors.primary[100],
        "& .MuiContainer-root": {},
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ justifyContent: { xs: "start", sm: "none", md: "block" } }}
          >
            <Grid item xs={2}>
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
              xs={3}
              sx={{ display: { xs: "none", sm: "none", md: "block" } }}
            >
              {/* Content for the middle */}
              <Box display="flex" alignItems="center">
                <CategoryIcon />
                <Typography variant="h3">Category</Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={7}
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

                <NavItem title="Online" to="/" />
                <NavItem title="Classroom" to="/" />
                <NavItem title="Instructors" to="/" />
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
            <NavItem title="Courses" to="/" />

            <NavItem title="About us" to="/" />

            <NavItem title="Online" to="/" />
            <NavItem title="Classroom" to="/" />
            <NavItem title="Instructors" to="/" />
          </Box>
        </Box>
      )}
    </AppBar>
  );
}

interface NavItemProps {
  title: string;
  to: string;
}

function NavItem({ title, to }: NavItemProps) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box sx={{ width: "100%", p: "5px" }}>
      <Link href={to}>
        <Typography
          variant="h4"
          fontWeight="bold"
          color={colors.rose[100]}
          sx={{ m: "0 5px", p: "5px" }}
        >
          {title}
        </Typography>
      </Link>
    </Box>
  );
}

export default NavBar;
