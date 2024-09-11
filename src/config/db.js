import mongoose from 'mongoose';

const MONGO_URI = 'mongodb://localhost:27017/RestAPI-mongodb'; // Cambia esto a la URI de tu base de datos

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Conectado a '+ MONGO_URI);
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
    process.exit(1);
  }
};

export default connectDB;

// crear base de datos mongo, quede en el error de mongo_uri 22:55