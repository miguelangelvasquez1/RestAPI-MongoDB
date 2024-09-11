import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const secretKey = 'tu_clave_secreta';

export const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // `Bearer <token>`

  if (token == null) {
    return res.status(401).json({ message: 'No se proporciona un token' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    const user = await User.findById(decoded.id); // Usa `findById` con el ID del token

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    req.user = user; // Guarda el usuario en la solicitud
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Token inválido o expirado' });
  }
};
