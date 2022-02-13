const express = require("express");
const router = express.Router();

const pelicula = require("../controllers/pelicula.controller");

router.get("/", pelicula.getPeliculas);

router.post("/", pelicula.createPelicula);

router.get("/:id", pelicula.getPelicula);

router.put("/:id", pelicula.editPelicula);

router.delete("/:id", pelicula.deletePelicula);

module.exports = router;
