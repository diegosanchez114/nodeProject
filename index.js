const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Sirve los archivos estáticos en la carpeta "public"
app.use(express.static(path.join(__dirname, 'Pagina')));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Pagina', 'index.html'));
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});