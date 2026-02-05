import mongoose from "mongoose";

export default async function conectarBd(uri) {
  try {
    const db = await mongoose.connect(uri);
    console.log(`Base de datos conectada en: ${db.connection.name}`);
    return db;
  } catch (error) {
    console.error(`Error al conectar la base de datos: ${error.message}`);
    process.exit(1);
  }
}
