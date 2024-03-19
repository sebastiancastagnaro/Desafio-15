

const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRouter');
const documentRouter = require('./routes/documentRouter');

const app = express();
const PORT = process.env.PORT || 3000;

// Conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware para manejar datos JSON
app.use(express.json());

// Rutas de usuarios y documentos
app.use('/api/users', userRouter);
app.use('/api/documents', documentRouter);

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
});

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

