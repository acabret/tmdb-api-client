const express = require("express")
const app = express();
const cors = require('cors');
const moviesRouter = require("./controllers/movies")


app.use(express.json());
app.use("/api/movies", moviesRouter);


module.exports = app;
