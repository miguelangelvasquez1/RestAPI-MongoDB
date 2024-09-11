import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

export default User;

// Añadir un nuevo usuario
export const addUser = async (user) => {
  try {
    const newUser = new User(user);
    return await newUser.save();
  } catch (error) {
    console.error('Error al guardar el usuario:', error);
    throw error;
  }
};
  
  // Encontrar un usuario por email
  export const findUserByEmail = async (email) => {
    return await User.findOne({ email });
  };
  
  // Encontrar un usuario por ID
  export const findUserById = async (id) => {
    return await User.findById(id);
  };