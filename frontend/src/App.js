import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListarClientes from "./pages/ListarCliente";
import CadastrarCliente from "./pages/CadastrarCliente";
import Navbar from "./components/Navbar";
import { Container } from "@mui/material";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<ListarClientes />} />
          <Route path="/novo" element={<CadastrarCliente />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
