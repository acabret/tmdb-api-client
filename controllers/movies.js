const moviesRouter = require("express").Router();
const movieService = require("../services/movies");
const _ = require("lodash");

moviesRouter.get("/init", async (request, response) => {
  const { language } = request.query;
  console.log("lang received", language);
  const genres = (await movieService.getGenres({ language })).genres;
  const selectedGenres = _.sampleSize(genres, 4);

  // console.log("generos seleccionados",selectedGenres);
  const promiseSections = selectedGenres.map(async (genre) => {
    const topMovies = (
      await movieService.discoverMovies({ genre: genre.id, language })
    ).results;
    const selectedMovies = _.sampleSize(topMovies, 12);

    return {id:genre.id, name: genre.name, movies: [...selectedMovies] };
  });

  const resolvedSections = await Promise.all(promiseSections);

  return response.json({ genres, sections:resolvedSections });
});

// moviesRouter.get("/search", async (request, response) => {
//   const { query, language } = request.query;

//   const results = await movieService.queryMovies({ query, language });

//   return response.json(results);
// });

moviesRouter.get("/discover", async (request, response) => {
  const { genre, language, voteGte, voteLte, dateGte, dateLte } = request.query;

  const rawResults = await movieService.discoverMovies({
    genre,
    language,
    voteGte,
    voteLte,
    dateGte,
    dateLte
  });

  console.log("lista length", rawResults.results.length);

  const selectedMovies = _.sampleSize(rawResults.results, 12);

  return response.json(selectedMovies);
});

module.exports = moviesRouter;
