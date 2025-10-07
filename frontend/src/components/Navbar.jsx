import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ background: "#1565c0" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, cursor: "pointer" }} onClick={() => navigate("/")}>
          Sistema de Clientes
        </Typography>
        <Box>
          <Button color="inherit" onClick={() => navigate("/")}>Listar</Button>
          <Button color="inherit" onClick={() => navigate("/novo")}>Cadastrar</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
