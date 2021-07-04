const axios = require("axios");
const config = require("../utils/config");

const defaultLanguage = "en-US";
const baseURL = "https://api.themoviedb.org/3";

const searchMovieBaseURL = `${baseURL}/search/movie`;
const discoverMovieBaseURL = `${baseURL}/discover/movie`;
const movieGenresBaseURL = `${baseURL}/genre/movie/list`;

const queryMovies = ({ query, language = defaultLanguage }) => {
  const fullURL = `${searchMovieBaseURL}?api_key=${config.API_KEY}&query=${query}&language=${language}`;
  console.log(fullURL);

  return axios.get(fullURL).then((response) => response.data);
};

const discoverMovies = ({
  language = defaultLanguage,
  genre,
  voteGte,
  voteLte,
  dateGte,
}) => {
  const dateGteKey = dateGte ? `&release_date.gte=${dateGte}` : "";
  const voteLteKey = voteLte ? `&vote_average.lte=${voteLte}` : "";
  const voteGteKey = voteGte ? `&vote_average.gte=${voteGte}` : "";
  const genreKey = genre ? `&with_genres=${genre}` : "";
  const languageKey = `&language=${language}`;
  const defaultKeys =
    "&include_adult=false&page=1&vote_count.gte=1000&sort_by=vote_average.desc";
  const fullURL = `${discoverMovieBaseURL}?api_key=${config.API_KEY}${languageKey}${dateGteKey}${genreKey}${voteGteKey}${voteLteKey}${defaultKeys}`;

  console.log(fullURL);
  return axios.get(fullURL).then((response) => response.data);
};

const getGenres = ({language = defaultLanguage}) => {
  const languageKey = `&language=${language}`;
  const fullURL = `${movieGenresBaseURL}?api_key=${config.API_KEY}${languageKey}`
  return axios.get(fullURL).then(response => response.data)
}



module.exports = { queryMovies, discoverMovies, getGenres };
