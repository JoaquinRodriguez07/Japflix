/* const url = `https://japceibal.github.io/japflix_api/movies-data.json`;
const btn = document.getElementById('inputBuscar');

function cargar(btnValue) {
  try{
    fetch(url)
    .then(response => response.json())
    .then(data => {
      data.forEach(function(movie) {
        const ul = document.getElementById('lista');
        ul.innerHTML = '';

        if (movie.title.toLowerCase().includes(btnValue.toLowerCase()) || 
            movie.tagline.toLowerCase().includes(btnValue.toLowerCase()) ||
            movie.genres.toLowerCase().includes(btnValue.toLowerCase()) ||
            movie.overview.toLowerCase().includes(btnValue.toLowerCase())) {

          const estrellas = '<i class="fa fa-star"></i>'.repeat(movie.vote_average/2);
          const li = document.createElement("li");

          li.className = ""
          li.innerHTML = 
          `
            <div class="top">
              <h4> ${movie.title} </h4>
              <p> ${estrellas} <p>
            </div>
            <p class="desc">${movie.tagline}</p>
          `
          ul.appendChild(li);
        }
      })
    })
  } catch (error) {
    console.log(error);
  }
}
const btnBuscar = document.getElementById('btnBuscar');

btnBuscar.addEventListener('click', () => {
  const btnValue = btn.value;
  cargar(btnValue);
}) */

async function searchMovies() {
  const searchTerm = document.getElementById('inputBuscar').value;
  const response = await fetch('https://japceibal.github.io/japflix_api/movies-data.json');
  const movies = await response.json();
  const listaDiv = document.getElementById('lista');
  listaDiv.innerHTML = '';
  movies.forEach(movie => {
    if (movie.title.includes(searchTerm) || movie.genres.includes(searchTerm) || movie.tagline.includes(searchTerm) || movie.overview.includes(searchTerm)) {
      const movieDiv = document.createElement('div');
      movieDiv.innerHTML = `<p><strong>${movie.title}</strong> - ${movie.tagline} - Vote Average: ${movie.vote_average}</p>`;
      movieDiv.addEventListener('click', () => showMovieDetails(movie));
      listaDiv.appendChild(movieDiv);
    }
  });
}

function showMovieDetails(movie) {
  const detailTitle = document.getElementById('detailTitle');
  const detailOverview = document.getElementById('detailOverview');
  const detailGenres = document.getElementById('detailGenres');
  detailTitle.innerText = movie.title;
  detailOverview.innerText = movie.overview;
  detailGenres.innerText = 'Genres: ' + movie.genres.join(', ');
  const movieDetailsDiv = document.getElementById('movieDetails');
  movieDetailsDiv.style.display = 'block';
}
