import { getData } from "./getData.js";
import { display } from "./display.js";
import { paginate } from "./paginate.js";
import { displayButtons } from "./displayButtons.js";
const URL =
  "http://api.themoviedb.org/3/discover/movie?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=812f407f06032e3686428df742805845";

//http://api.themoviedb.org/3/discover/movie?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=812f407f06032e3686428df742805845&page=6

const IMAGE_URL = `https://image.tmdb.org/t/p/w500`;
const SEARCH_URL =
  "http://api.themoviedb.org/3/search/movie?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=812f407f06032e3686428df742805845&query=''";

const movieContainer = document.querySelector(".movies");
const aboutBtn = document.querySelector(".about-btn");
const modal = document.querySelector(".the-modal");
const closeBtn = document.querySelector(".close-btn");
const form = document.getElementById("form");
const searchInput = document.getElementById("search");
const pageBtnContainer = document.querySelector(".page-btn-container");
let index = 0;
let pages = [];

async function getMov(link) {
  const response = await fetch(link);
  const data = await response.json();
  display(movieContainer, data.results);
}

async function init() {
  const movies = await getData();
  pages = paginate(movies);
  console.log(pages);
  display(movieContainer, pages[index]);
  displayButtons(pageBtnContainer, pages, index);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let searchMov = searchInput.value;
  if (searchMov && searchMov !== "") {
    getMov(SEARCH_URL + searchMov);
    searchInput.value = "";
  }
  displayButtons(pageBtnContainer, pages, index, false);
});

aboutBtn.addEventListener("click", function () {
  modal.classList.toggle("open");
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open");
});

//=======================================
//Pagination Function
//=======================================
pageBtnContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("page-btn-container")) return;
  if (e.target.classList.contains("page-btn")) {
    index = parseInt(e.target.dataset.index);
  }
  if (e.target.classList.contains("next-btn")) {
    index++;
    if (index > pages.length - 1) {
      index = 0;
    }
  }
  if (e.target.classList.contains("prev-btn")) {
    index--;
    if (index < 0) {
      index = pages.length - 1;
    }
  }
  display(movieContainer, pages[index]);
  displayButtons(pageBtnContainer, pages, index);
});
window.addEventListener("load", init);
