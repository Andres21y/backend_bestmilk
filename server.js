const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// --- MIDDLEWARE ---
// Habilitamos CORS para que nuestro frontend pueda hacerle peticiones
app.use(cors());

app.use(express.json());

// --- RUTAS DE LA API ---
app.get('/api/test', (req, res) => {
    res.json({ message: '¡La conexión con el backend fue exitosa!' });
});

// Aquí irán futuras rutas para registrar usuarios, guardar ganado, etc.
// app.post('/api/register', ...)
// app.post('/api/login', ...)
// app.get('/api/ganado', ...)


module.exports = app;