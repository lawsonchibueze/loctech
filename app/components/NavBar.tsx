import AppBar from "@mui/material/AppBar";
import NavContent from "./Nav/NavContent";
import getCurrentUser from "@/app/actions/getCurrentUser";

 function NavBar() {



  console.log("user",);

  return (
    <AppBar position="sticky">
      <NavContent />
    </AppBar>
  );
}

export default NavBar;
