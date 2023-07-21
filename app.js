const express = require('express');
const app = express();
const path = require('path');
const port = 3030;

app.use(express.static('public'));

app.get("/home", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "home.html"))
);

// Ruta para la página de registro de usuario
app.get("/register", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "register.html"))
);

// Ruta para la página de inicio de sesión
app.get("/login", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "login.html"))
);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

app.post("/home", (req, res) => 
res.sendFile(path.join(__dirname, "views", "home.html"))
);