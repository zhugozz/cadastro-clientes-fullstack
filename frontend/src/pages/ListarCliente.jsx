import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Paper,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import api from "../api/api";

export default function ListarClientes() {
  const [clientes, setClientes] = useState([]);
  const navigate = useNavigate();

  const carregarClientes = async () => {
    const response = await api.get("/clientes");
    setClientes(response.data);
  };

  const deletarCliente = async (id) => {
    await api.delete(`/clientes/${id}`);
    carregarClientes();
  };

  useEffect(() => {
    carregarClientes();
  }, []);

  return (
    <Paper sx={{ p: 3, borderRadius: 3, boxShadow: 3 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h5" fontWeight="bold">Lista de Clientes</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate("/novo")}
        >
          Novo Cliente
        </Button>
      </Box>

      <Table>
        <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
          <TableRow>
            <TableCell><b>ID</b></TableCell>
            <TableCell><b>Nome</b></TableCell>
            <TableCell><b>CNPJ</b></TableCell>
            <TableCell><b>Segmento</b></TableCell>
            <TableCell><b>Ações</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clientes.map((cli) => (
            <TableRow key={cli.id}>
              <TableCell>{cli.id}</TableCell>
              <TableCell>{cli.nome}</TableCell>
              <TableCell>{cli.cnpj}</TableCell>
              <TableCell>{cli.segmento}</TableCell>
              <TableCell>
                <IconButton color="error" onClick={() => deletarCliente(cli.id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
