const moviesRouter = require("express").Router();
const movieService = require("../services/movies");
const _ = require("lodash");

moviesRouter.get("/init", async (request, response) => {
  const { language } = request.query;

  const genres = (await movieService.getGenres({ language })).genres;
  const selectedGenres = _.sampleSize(genres, 4);

  const promiseSections = selectedGenres.map(async (genre) => {
    const topMovies = (
      await movieService.discoverMovies({ genre: genre.id, language })
    ).results;
    const selectedMovies = _.sampleSize(topMovies, 12);

    return { id: genre.id, name: genre.name, movies: [...selectedMovies] };
  });

  const resolvedSections = await Promise.all(promiseSections);

  return response.json({ genres, sections: resolvedSections });
});

moviesRouter.get("/find/:movieId", async (request, response) => {
  const { movieId } = request.params;
  const { language } = request.query;
  console.log(movieId, language);
  //validar parametro de numeros/string
  const movieRequest = await movieService.getMovie({ movieId, language });

  if (movieRequest.status == 404) {
    return response
      .status(404)
      .json({ status: 404, message: movieRequest.statusText });
  }

  return response.json({
    status: movieRequest.status,
    message: movieRequest.statusText,
    payload: movieRequest.data,
  });
});

moviesRouter.get("/discover", async (request, response) => {
  const { genre, language, voteGte, voteLte, dateGte, dateLte } = request.query;

  const rawResults = await movieService.discoverMovies({
    genre,
    language,
    voteGte,
    voteLte,
    dateGte,
    dateLte,
  });

  console.log("lista length", rawResults.results.length);

  const selectedMovies = _.sampleSize(rawResults.results, 12);

  return response.json(selectedMovies);
});

module.exports = moviesRouter;
