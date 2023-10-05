document.addEventListener("DOMContentLoaded", function() {
  const url = `https://japceibal.github.io/japflix_api/movies-data.json`;
 
  function cargar(busqueda) {
    const ul = document.getElementById("lista");


    fetch(url)
      .then(response => response.json())
      .then((data) => {
        data.forEach(function(movie) {
          if (movie.title.toLowerCase().includes(busqueda.toLowerCase()) || 
          movie.tagline.toLowerCase().includes(busqueda.toLowerCase()) ||
          movie.genres.toLowerCase().includes(busqueda.toLowerCase()) ||
          movie.overview.toLowerCase().includes(busqueda.toLowerCase())) 
          {

          const estrellas = '<i class="fa fa-star"></i>'.repeat(movie.vote_average/2);
          const li = document.createElement("li");

          li.className = "list-group-item";
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
  }
  const btnBuscar = document.getElementById("btnBuscar");

  btnBuscar.addEventListener('click', function () {
    const busqueda = document.getElementById('inputBuscar').value;
    cargar(busqueda);
  })  
});

