const axios = require("axios");
const config = require("../utils/config");

const baseURL = "https://api.themoviedb.org/3";

const searchMovieBaseURL = `${baseURL}/search/movie`;
const discoverMovieBaseURL = `${baseURL}/discover/movie`;
const movieGenresBaseURL = `${baseURL}/genre/movie/list`;
const getMovieBaseURL = `${baseURL}//movie`;

const queryMovies = ({ query, language }) => {
  const languageKey = language.toLocaleLowerCase().startsWith("es")
    ? `&language=es-es`
    : `&language=en-us`;
  const fullURL = `${searchMovieBaseURL}?api_key=${config.API_KEY}&query=${query}&language=${language}`;
  console.log(fullURL);

  return axios.get(fullURL).then((response) => response.data);
};

const getMovie = async ({ language, movieId }) => {
  const languageKey = language.toLocaleLowerCase().startsWith("es")
    ? `&language=es-es`
    : `&language=en-us`;

  const fullURL = `${getMovieBaseURL}/${movieId}?api_key=${config.API_KEY}${languageKey}`;

  return axios.get(fullURL).then((response) => response.data);
};

const discoverMovies = async ({
  language,
  genre,
  voteGte,
  voteLte,
  dateGte,
  dateLte,
}) => {
  const dateLteKey = dateLte ? `&primary_release_date.lte=${dateLte}` : "";
  const dateGteKey = dateGte ? `&primary_release_date.gte=${dateGte}` : "";
  const voteLteKey = voteLte ? `&vote_average.lte=${voteLte}` : "";
  const voteGteKey = voteGte ? `&vote_average.gte=${voteGte}` : "";
  const genreKey = genre ? `&with_genres=${genre}` : "";
  const languageKey = language.toLocaleLowerCase().startsWith("es")
    ? `&language=es-es`
    : `&language=en-us`;
  // const defaultKeys =
  //   "&include_adult=false&page=1&vote_count.gte=500&sort_by=vote_average.desc";
  const defaultKeys = "&include_adult=false&page=1&vote_count.gte=500";
  const fullURL = `${discoverMovieBaseURL}?api_key=${config.API_KEY}${languageKey}${dateGteKey}${dateLteKey}${genreKey}${voteGteKey}${voteLteKey}${defaultKeys}`;

  console.log(fullURL);
  // return axios.get(fullURL).then((response) => response.data);

  const firstBatch = await axios.get(fullURL).then((response) => response.data);

  console.log("paginas ", firstBatch.total_pages);

  if (firstBatch.total_pages > 1) {
    const secondBatch = await axios
      .get(`${fullURL}&page=2`)
      .then((response) => response.data);

    firstBatch.results.push(...secondBatch.results);
  }

  return firstBatch;
};

const getGenres = ({ language }) => {
  const languageKey = language.toLocaleLowerCase().startsWith("es")
    ? `&language=es-es`
    : `&language=en-us`;
  const fullURL = `${movieGenresBaseURL}?api_key=${config.API_KEY}${languageKey}`;
  return axios.get(fullURL).then((response) => response.data);
};

module.exports = { queryMovies, discoverMovies, getGenres, getMovie };
