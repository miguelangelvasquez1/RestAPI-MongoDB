import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { addUser, findUserByEmail, findUserById } from '../models/userModel.js';

// Clave secreta para firmar y verificar el token
const secretKey = 'tu_clave_secreta';

// Registro de usuario
export const registerUser = async (req, res) => {
  const { email, password } = req.body;
  const existingUser = await findUserByEmail(email);

  if (existingUser) {
    return res.status(400).json({ message: 'El usuario ya existe' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { email, password: hashedPassword };

  const savedUser = await addUser(newUser);

  // Firmar el token con el `id` del usuario en lugar del email
  const token = jwt.sign({ id: savedUser._id }, secretKey, { expiresIn: '1h' });
  res.status(201).json({ message: 'Usuario registrado con éxito', token });
};


// Login de usuario
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await findUserByEmail(email);

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({ message: 'Credenciales inválidas' });
  }

  // Firmar el token con el `id` del usuario
  const token = jwt.sign({ id: user._id }, secretKey, { expiresIn: '1h' });
  res.json({ message: 'Login exitoso', token });
};

// Obtención de usuario por ID (opcional)
export const getUserById = async (req, res) => {
  const userId = req.user._id; // Asumiendo que el ID del usuario está en req.user.sub

  try {
    const user = await findUserById(userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el usuario' });
  }
};
