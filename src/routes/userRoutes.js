import express from 'express';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { getUserById } from '../controllers/authController.js';

const router = express.Router();

// Ruta protegida para obtener el perfil del usuario
router.get('/profile', authMiddleware, getUserById);

export default router;
