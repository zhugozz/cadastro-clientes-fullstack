const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");


const serviceAccount = require("./serviceAccountKey.json"); 


try {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
    console.log(" Firebase Admin inicializado com sucesso!");
} catch (error) {
    console.error(" ERRO ao inicializar o Firebase Admin:");
    console.error(error.message);
    
}

const db = admin.firestore();
const clientesRef = db.collection("clientes");


const app = express();
app.use(cors());
app.use(express.json());


// POST - Cadastrar cliente
app.post("/clientes", async (req, res) => {
    try {
        const data = req.body;
        const docRef = await clientesRef.add(data);
        res.status(201).json({ id: docRef.id, ...data });
    } catch (err) {
        
        res.status(500).json({ error: err.message }); 
    }
});

// GET - Listar todos
app.get("/clientes", async (req, res) => {
    try {
        const snapshot = await clientesRef.get();
        const clientes = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.json(clientes);
    } catch (err) {
        
        res.status(500).json({ error: err.message });
    }
});

// GET - Buscar por ID
app.get("/clientes/:id", async (req, res) => {
    try {
        const doc = await clientesRef.doc(req.params.id).get();
        if (!doc.exists) return res.status(404).json({ message: "Cliente não encontrado" });
        res.json({ id: doc.id, ...doc.data() });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE - Deletar cliente
app.delete("/clientes/:id", async (req, res) => {
    try {
        await clientesRef.doc(req.params.id).delete();
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = 3333;
app.listen(PORT, () => console.log(`✅ API rodando em http://localhost:${PORT}`));