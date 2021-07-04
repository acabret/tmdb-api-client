const axios = require("axios");
const config = require("../utils/config")

const baseURL = "https://api.themoviedb.org/3";
const searchMovieURL = `${baseURL}/search/movie`
const defaultLanguage = "en-US";


const queryMovies = ({ query, language = defaultLanguage }) => {
  
  const fullURL = `${searchMovieURL}?api_key=${config.API_KEY}&query=${query}&language=${language}`
  console.log(fullURL);
  
  return axios
    .get(fullURL)
    .then((response) => response.data);
};

module.exports = { queryMovies };
