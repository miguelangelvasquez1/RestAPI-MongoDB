import jwt from 'jsonwebtoken';

const secretKey = 'tu_clave_secreta'; // Puedes mover esto a un archivo de configuración

// Función para generar el token
export const generateToken = (email) => {
  const payload = { email };
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
};//este método se puede reemplazar en register y login
