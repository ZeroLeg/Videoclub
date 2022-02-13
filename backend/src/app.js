const express = require("express");
const cors = require("cors");

const app = express();

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
// const corsOptions = {origin: "http://localhost:4200"}
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/peliculas", require("./routes/peliculas.routes"));

module.exports = app;
