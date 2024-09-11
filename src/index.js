// src/index.js
import express from 'express';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import connectDB from './config/db.js'; // Importa la función de conexión

const app = express();
const port = process.env.PORT || 3000;

// Conectar a MongoDB
connectDB();

app.use(express.json()); // Para parsear el cuerpo de las solicitudes en formato JSON

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes); // Ruta protegida

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
