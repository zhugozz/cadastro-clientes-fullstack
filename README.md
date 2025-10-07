#  Projeto - Sistema de Cadastro de Clientes

Aplicação **Full Stack** para gerenciamento de clientes, com backend em **Node.js (Express + Firebase Firestore)** e frontend em **React (Vite + Material UI)**.

---

##  Tecnologias Utilizadas

### 🔹 Backend
- **Node.js**
- **Express**
- **Firebase Admin SDK**
- **Firestore** (Banco de Dados NoSQL)

### 🔹 Frontend
- **React (Vite)**
- **Material UI (MUI)**
- **Axios**
- **React Router DOM**

---

##  Estrutura do Projeto

```bash
📦 projeto-cadastro-clientes
├── 📁 backend
│   ├── index.js
│   ├── serviceAccountKey.json
│   └── package.json
│
├── 📁 frontend
│   ├── 📁 src
│   │   ├── 📁 api
│   │   │   └── api.js
│   │   ├── 📁 pages
│   │   │   ├── ListarClientes.jsx
│   │   │   └── CadastrarCliente.jsx
│   │   ├── 📁 Components
│   │   │   └── Navbar.jsx
│   │   ├── App.js
│   │   └── Index.js
│   └── package.json
│
└── README.md
```
# Como Rodar o Projeto

### 1 Backend
```bash
cd backend
npm install
node index.js

````

### 2 Frontend
```bash
cd frontend
npm install
npm start
````
Abaixo está um fluxograma Mermaid ilustrando a lógica do script:

```mermaid
---
config:
  layout: dagre
---
flowchart TD
 subgraph subGraph0["Client Side"]
        A["Frontend - React + MUI"]
  end
 subgraph subGraph1["Server Side"]
        B["API Express - Node.js"]
        D["Firebase Admin SDK"]
        C["Firebase Firestore"]
  end
    A -- Axios HTTP Requests --> B
    B -- CRUD /clientes --> C
    B --> D
    C -- Armazena dados --> E@{ label: "Coleção 'clientes'" }
    E@{ shape: cylinder}


