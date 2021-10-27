const URL_PAGE_1 =
  "https://api.themoviedb.org/3/discover/movie?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=812f407f06032e3686428df742805845&page=1";
const URL_PAGE_2 =
  "https://api.themoviedb.org/3/discover/movie?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=812f407f06032e3686428df742805845&page=2";
const URL_PAGE_3 =
  "https://api.themoviedb.org/3/discover/movie?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=812f407f06032e3686428df742805845&page=3";
const URL_PAGE_4 =
  "https://api.themoviedb.org/3/discover/movie?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=812f407f06032e3686428df742805845&page=4";

export async function getData() {
  const response1 = await fetch(URL_PAGE_1);
  const response2 = await fetch(URL_PAGE_2);
  const response3 = await fetch(URL_PAGE_3);
  const response4 = await fetch(URL_PAGE_4);

  const page1Res = await response1.json();
  const page2Res = await response2.json();
  const page3Res = await response3.json();
  const page4Res = await response4.json();

  const page1 = page1Res.results;
  const page2 = page2Res.results;
  const page3 = page3Res.results;
  const page4 = page4Res.results;
  const data = [...page1, ...page2, ...page3, ...page4];

  return data;
}
