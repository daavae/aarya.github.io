import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <AppBar
      position="fixed" // stays at the top, fixed on scroll
      sx={{ width: "100%", top: 0 }}
    >
      <Toolbar>
        {/* Title */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Aarya's Website!!!
        </Typography>

        {/* Right side buttons */}
        <Button color="inherit" onClick={navigate("/home")}>
          Home
        </Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}
