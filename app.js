const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const indexRouter = require('./src/routes/index');
const usersRouter = require('./src/routes/users');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get("/", (req, res) =>
  res.render("index")
);

app.get("/register", (req, res) =>
  res.render("register")
);

app.get("/login", (req, res) =>
  res.render("login")
);

const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

app.post("/upload", upload.single("photo"), (req, res) => {
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
