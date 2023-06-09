"use client";

import "./globals.css";
import { Nunito } from "next/font/google";
import { ColorModeContext, useMode } from "./lib/theme";
import { CssBaseline, ThemeProvider } from "./lib/mui";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Box } from "./lib/mui";
import getCurrentUser from "./actions/getCurrentUser";
import NextAuthSessionsProvider from "./providers/SessionsProvider";
const nunito = Nunito({ subsets: ["latin"] });

const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default  function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, colorMode] = useMode();

  return (
    <html lang="en">
      <body className={nunito.className} suppressHydrationWarning={true}>
        <NextAuthSessionsProvider>
          <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <NavBar />
              <Box sx={{ p: { xs: "10px 25px", md: "20px 50px" } }}>
                {children}
                <Footer />
              </Box>
            </ThemeProvider>
          </ColorModeContext.Provider>
        </NextAuthSessionsProvider>
      </body>
    </html>
  );
}
