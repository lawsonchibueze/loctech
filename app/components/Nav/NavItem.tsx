import Link from "next/link";
import { Grid, Typography, useTheme } from "../../lib/mui";
import { tokens } from "../../lib/theme";

interface NavItemProps {
  title: string;
  to: string;
}

export default function NavItem({ title, to }: NavItemProps) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Grid container justifyContent={{ xs: "flex-start", md: "center" }}>
      <Link href={to} style={{ width: "100%" }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          color={colors.rose[100]}
          textAlign={{ xs: "start", md: "center" }}
          sx={{ m: "0 5px", p: "5px" }}
        >
          {title}
        </Typography>
      </Link>
    </Grid>
  );
}
