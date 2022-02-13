const mongoose = require("mongoose");
const { Schema } = mongoose;

const peliculaSchema = new Schema(
  {
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    genero: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Pelicula", peliculaSchema);
