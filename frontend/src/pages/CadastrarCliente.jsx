import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Grid, Paper } from "@mui/material";
import api from "../api/api";

export default function CadastrarCliente() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nome: "",
    cnpj: "",
    segmento: "",
    cep: "",
    endereco: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/clientes", form);
    navigate("/");
  };

  return (
    <Paper sx={{ p: 4, borderRadius: 3, boxShadow: 3 }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Cadastrar Cliente
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {Object.keys(form).map((key) => (
            <Grid item xs={12} sm={6} key={key}>
              <TextField
                label={key.toUpperCase()}
                name={key}
                value={form[key]}
                onChange={handleChange}
                fullWidth
                required={["nome", "cnpj", "segmento"].includes(key)}
              />
            </Grid>
          ))}
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
        >
          Salvar
        </Button>
      </form>
    </Paper>
  );
}
