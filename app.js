const express = require('express');
const app = express();
const path = require('path');
const port = 3030;

app.use(express.static('public'));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "public", "views", "home.html"))
);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
