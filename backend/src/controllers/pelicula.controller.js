const Pelicula = require("../models/pelicula");

const peliculaCtrl = {};

peliculaCtrl.getPeliculas = async (req, res, next) => {
  const peliculas = await Pelicula.find();
  res.json(peliculas);
};

peliculaCtrl.createPelicula = async (req, res, next) => {
  const pelicula = new Pelicula({
    titulo: req.body.titulo,
    descripcion: req.body.descripcion,
    genero: req.body.genero
  });
  await pelicula.save();
  res.json({ status: "Pelicula created" });
};

peliculaCtrl.getPelicula = async (req, res, next) => {
  const { id } = req.params;
  const pelicula = await Pelicula.findById(id);
  res.json(pelicula);
};

peliculaCtrl.editPelicula = async (req, res, next) => {
  const { id } = req.params;
  await Pelicula.findByIdAndUpdate(id, {$set: req.body}, {new: true});
  res.json({ status: "Pelicula Updated" });
};

peliculaCtrl.deletePelicula = async (req, res, next) => {
  await Pelicula.findByIdAndRemove(req.params.id);
  res.json({ status: "Pelicula Deleted" });
};

module.exports = peliculaCtrl;
