const url = `https://japceibal.github.io/japflix_api/movies-data.json`
const btn = document.getElementById('inputBuscar')
const contenedor = document.getElementById('catalogo')


document.addEventListener('DOMContentLoaded',()=>{

    fetch(url)
    .then(response =>response.json())
    .then(response =>catalogo(response))
    .catch(error){
      console.log(error)
    }
    function catalogo(registro){
    
      for (const i of registro){
        
        contenedor.innerHTML +=
          `
         
            <div class="pelicula">
            <ul>
              <li class="titulo buscador"> ${i.title} </li>
              <li class ="descripcion buscador"> ${i.overview} </li>
              <li  class ="sold"> ${i.tagline}</li>
              <li class ="puntaje">${i.vote_average}</li> 
            </ul>

            </div>
          <div>
        `
      }
    };
   

})





/* 
 document.addEventListener('click', e => {
        if (e.target.matches('inputBuscar')) {
      
          let searchText = e.target.value.toLowerCase();
          let fichasTexto = document.querySelectorAll("div.descDeArticulo");
      
          fichasTexto.forEach(producto => {
            let fichaTitulo = producto.getElementsByClassName("titulo")[0].innerHTML.toLowerCase();
            let fichaDesc = producto.getElementsByClassName("descripcion")[0].innerHTML.toLowerCase();
            
            const fichaEntera = producto.closest('.articulo');
      
            if (fichaTitulo.includes(searchText) || fichaDesc.includes(searchText)) {
              // Muestra el elemento si coincide con la búsqueda
              fichaEntera.style.display = 'block';
            } else {
              // Oculta el elemento si no coincide con la búsqueda
              fichaEntera.style.display = 'none';
            }
          })
        }
      });
 */