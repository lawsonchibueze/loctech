"use client"; // Error components must be Client Components

import AnimatedRoute from "./components/AnimatedRoute";
import { Box, Button, Grid, Typography, useTheme } from "./lib/mui";
import { tokens } from "./lib/theme";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <AnimatedRoute>
      <Box sx={{ p: { xs: "10px 25px", md: "20px 50px" } }}>
        <Grid
          container
          justifyContent="center"
          direction="column"
          alignItems="center"
        >
          <Typography variant="h2" fontWeight="bold" textAlign="center">
            {error.message}
          </Typography>
          <Button
            onClick={() => reset()}
            variant="contained"
            type="submit"
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              color: "#fff",
              m: "15px",
              p: "10px",
              backgroundColor: colors.rose[500],
              "&:hover": {
                backgroundColor: colors.rose[600],
              },
            }}
          >
            Try again
          </Button>
        </Grid>
      </Box>
    </AnimatedRoute>
  );
}
