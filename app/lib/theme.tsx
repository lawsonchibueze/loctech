"use client"
import { createContext, useState, useMemo, useEffect } from "react";
import { Nunito } from "next/font/google";
import { PaletteMode} from "./mui";
import { createTheme, Theme } from "@mui/material/styles";

const nunito = Nunito({ subsets: ["latin"] });

export const tokens = (mode: PaletteMode) => ({
  ...(mode === "dark"
    ? {
        rose: {
          100: "#fff",
          200: "#ffa9cd",
          300: "#ff7eb5",
          400: "#ff539c",
          500: "#ff2883",
          600: "#cc2069",
          700: "#99184f",
          800: "#661034",
          900: "#33081a",
        },
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },

        primary: {
          100: "#0b0d10",
          200: "#afb3b9",
          300: "#878d97",
          400: "#5f6774",
          500: "#374151",
          600: "#2c3441",
          700: "#212731",
          800: "#161a20",
          900: "#d7d9dc",
        },
      }
    : {
        rose: {
          100: "#ff2883",
          200: "#661034",
          300: "#99184f",
          400: "#cc2069",
          500: "#ff2883",
          600: "#ff539c",
          700: "#ff7eb5",
          800: "#ffa9cd",
          900: "#ffd4e6",
        },

        primary: {
          100: "#fff",
          200: "#161a20",
          300: "#212731",
          400: "#2c3441",
          500: "#374151",
          600: "#5f6774",
          700: "#878d97",
          800: "#afb3b9",
          900: "#d7d9dc",
        },
        grey: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
        },
      }),
});

//mui settings

export const themeSettings = (mode: PaletteMode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[300],
            },
            secondary: {
              main: colors.rose[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.rose[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc ",
            },
          }),
    },
    typography: {
      fontFamily: [nunito].join(","),
      fontSize: 12,
      h1: {
        fontFamily: [nunito].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: [nunito].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: [nunito].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: [nunito].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: [nunito].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: [nunito].join(","),
        fontSize: 14,
      },
    },
    
  };
};

//create the content
//color context type
export interface ColorModeContextType {
  toggleColorMode: () => void;
}

export const ColorModeContext = createContext<ColorModeContextType>({
  toggleColorMode: () => {},
});

export const useMode = (): [Theme, ColorModeContextType] => {
  const [mode, setMode] = useState<PaletteMode>(() => {
    const storedMode = localStorage.getItem("colorMode"); //get mode from localstorage
    return (storedMode as PaletteMode) || "light";
  });

  useEffect(() => {
    localStorage.setItem("colorMode", mode); //set mode to localStorage
  }, [mode]);

  const colorMode = useMemo<ColorModeContextType>(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "dark" ? "light" : "dark")),
    }),
    []
  );

  const theme = useMemo<Theme>(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
