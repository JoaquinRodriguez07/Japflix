const url = `https://japceibal.github.io/japflix_api/movies-data.json`;
const btn = document.getElementById('inputBuscar')
const contenedor = document.getElementById('catalogo')


document.addEventListener('DOMContentLoaded',()=> {
  
  try{
    fetch(url)
    .then(response =>response.json())
    .then(data => {

      items.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        li.className = "list-group-item";
        itemList.appendChild(li);
      });

    })
  }
  catch(error){
    console.log(error)
  }
  })

  








  
 /*  function crearLista(registro){

    for (const i of registro){
      contenedor.innerHTML +=
       
      `
          <ul>
            <li class="titulo buscador"> ${i.title} </li>
            <li class ="descripcion buscador"> ${i.tagline} </li>
            <li class ="sold"> Unidades vendidas: ${i.vote_average}</li>
          </ul>
        
      `
    }
  };
 */



/* function buscar(e) {
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
} */