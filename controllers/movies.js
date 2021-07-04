const moviesRouter = require("express").Router();
const movieService = require("../services/movies");

moviesRouter.get("/", (request, response) => {
  const movies = [
    {
      movie: "iron giant",
      rating: 8.6,
      description: "best movie ever",
    },
    {
      movie: "madmax",
      rating: 8.2,
      description: "best movie ever",
    },
    {
      movie: "batman",
      rating: 8.9,
      description: "best movie ever",
    },
  ];

  return response.json(movies);
});

moviesRouter.get("/search", async (request, response) => {
  // const { query, language } = request.body
  const { query, language } = request.query


  const results = await movieService.queryMovies({ query, language });

  return response.json(results);
});

moviesRouter.get("/");

module.exports = moviesRouter;
