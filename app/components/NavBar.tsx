import AppBar from "@mui/material/AppBar";
import NavContent from "./Nav/NavContent";

function NavBar() {
  return (
    <AppBar position="sticky">
      <NavContent />
    </AppBar>
  );
}

export default NavBar;
