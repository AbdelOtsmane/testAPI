const express = require('express');
const cors = require('cors'); // Importer le module cors
const app = express();
const port = process.env.PORT || 3000;

// Utiliser le middleware cors
app.use(cors());

// Route principale
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/api', (req, res) => {
  res.json({"msg": "Hello world"});
});

app.get('/test', (req, res) => {
  res.json({"firstName": "Noredine",
  "lastName": "Boukredia",});
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
