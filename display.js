const IMAGE_URL = `https://image.tmdb.org/t/p/w500`;
export function display(element, data) {
  element.innerHTML = data
    .map((item) => {
      const { title, poster_path, id } = item;
      return `
          <div class="movie">
                  <img src="${altPic(poster_path)}" class="movie-img" alt="">
                  <div class="movie-info">
                    <div class="title-container">
                    <h4>${title}</h4>
                    </div>
                 
                      
                      <a href="movie.html?id=${id}" class="read-more" data-id="${title}">read more</a>
              </div>
              </div>
          `;
    })
    .join("");
}
export function altPic(path) {
  if (path) {
    return `${IMAGE_URL}${path}`;
  } else {
    return `./caution-bcg.jpg`;
  }
}
