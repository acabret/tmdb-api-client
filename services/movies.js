const axios = require("axios");
const config = require("../utils/config");

const defaultLanguage = "en-US";
const baseURL = "https://api.themoviedb.org/3";

const searchMovieBaseURL = `${baseURL}/search/movie`;
const discoverMovieBaseURL = `${baseURL}/discover/movie`;

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
  dateGte
}) => {
  const sortBy = "&sort_by=vote_average.desc";
  const dateGteKey = `&release_date.gte=${dateGte}`
  const ratingLteKey = `&vote_average.lte=${voteLte}`;
  const ratingGteKey = `&vote_average.gte=${voteGte}`;
  const languageKey = `&language=${language}`;
  const genreKey = `&genre=${genre}`;
  const qualityKeys = "&include_adult=false&page=1&vote_count.gte=1000"
  const fullURL = `${discoverMovieBaseURL}?api_key=${config.API_KEY}${languageKey}${dateGteKey}${genreKey}${ratingGteKey}${ratingLteKey}${sortBy}${qualityKeys}`;

  console.log(fullURL);
  return axios.get(fullURL).then((response) => response.data);
};

module.exports = { queryMovies, discoverMovies };
