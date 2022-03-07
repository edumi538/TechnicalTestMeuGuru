import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }} style={{ marginBottom: "60px" }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography
            fontFamily="Roboto"
            variant="h5"
            color="inherit"
            component="div"
          >
            Lista Universidades - MeuGuru
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
