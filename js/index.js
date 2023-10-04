const url = `https://japceibal.github.io/japflix_api/movies-data.json`
const btn = document.getElementById('inputBuscar')
const contenedor = document.getElementById('catalogo')


document.addEventListener('DOMContentLoaded',() => {
  fetch(url)
  .then(response =>response.json())
  .then(data => {
    
  })

})

function lista(elementos) {
  elementos.innerHTML = "";

  elementos.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    li.className = "list-group-item";
    li.innerHTML = `
      <div class="top">
        <h4>${elementos.title}</h4>
        <p class="fa fa-star">${elementos.vote_average}</p>
      </div>
      <p>${elementos.tagline}</p>
    `
  })
}

function buscar(e) {
  if (e.target.matches('inputBuscar')) {
      
    let searchText = e.target.value.toLowerCase();
    let fichasTexto = document.querySelectorAll("div.descDeArticulo");

    fichasTexto.forEach(producto => {
      let fichaTitulo = producto.getElementsByClassName("titulo")[0].innerHTML.toLowerCase();
      let fichaDesc = producto.getElementsByClassName("descripcion")[0].innerHTML.toLowerCase();
      
      const fichaEntera = producto.closest('.articulo');

      if (fichaTitulo.includes(searchText) || fichaDesc.includes(searchText)) {
        // Musestra el elemento si coincide con la búsqueda
        fichaEntera.style.display = 'block';
      } else {
        // Oculta el elemento si no coincide con la búsqueda
        fichaEntera.style.display = 'none';
      }
    })
  }
}