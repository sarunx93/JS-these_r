//Fetch Movie by ID
import { altPic } from "./display.js";
import { getData } from "./getData.js";

const movieID = window.location.search.substring(4);
const movieProfile = document.querySelector(".movie-profile");
console.log(movieID);

const URL = `https://api.themoviedb.org/3/movie/${movieID}?api_key=812f407f06032e3686428df742805845&language=en-US`;
const IMAGE_URL = `https://image.tmdb.org/t/p/w500`;

async function displaySingleMovie() {
  const data = await getData();
  const selectedMovie = data.filter((mov) => mov.id === +movieID)[0];
  console.log(selectedMovie);
  const { title, popularity, overview, poster_path, release_date } =
    selectedMovie;
  movieProfile.innerHTML = `
  
  <img src="${altPic(poster_path)}" class="single-movie-img" alt="">
 
  <div class="movie-info-container">
    <h2>${title}</h2>
    <h3>${release_date}</h3>
    <p>${overview}</p>
  </div>
    `;
}

displaySingleMovie();

// popularity, overview, title, posterpath, release date
