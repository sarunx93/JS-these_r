export function paginate(movies) {
  const itemsPerPage = 8;
  const numberOfPage = Math.ceil(movies.length / itemsPerPage);
  const newMovies = Array.from({ length: numberOfPage }, (_, i) => {
    const start = i * itemsPerPage;
    return movies.slice(start, start + itemsPerPage);
  });
  return newMovies;
}
