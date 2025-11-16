let url = "https://dummyjson.com/products/categories";

// Barra de Busqueda
let inputBusqueda = document.getElementById('searchInput');
let mensajeError = document.querySelector('.error-message');
let formHeader = document.querySelector('.barra-busqueda');
formHeader.addEventListener('submit', function(event){
    event.preventDefault();
    //inputBusqueda.value.length DEVUELVE EL LARGO DEL TEXTO
    if (inputBusqueda.value.length < 3) {
        mensajeError.style.display = 'block';
        if (inputBusqueda.value === "") {
            mensajeError.innerText = 'Estas GAGA, pone algo de texto para buscar';
        }
        else {
            mensajeError.innerText = 'La búsqueda debe tener al menos 3 caracteres';
        }
    }
    else {
        this.submit();
    }
});

//Aside de categorias
fetch(url)
.then(function(response) {
  return response.json()
})
.then(function(data) {
    let infoCategory = document.querySelector(".nav-categorias"); //Data es un Array de Objetos de categoria con: "slug", "name" , "url"
    let barraCategory = "";
    for (let i = 0; i < data.length; i++) {
        barraCategory += 
        `
        <li class="category"><a href="./category.html?category=${data[i].slug}">${data[i].name}</a></li>
        `; //Uso "slug" en vez de "name" para el query porque en la API es el que va en la url de la categoria (empieza con minus) y en donde el usuario hace click si va name (empieza con mayus)
    }
    infoCategory.innerHTML = barraCategory; 
})
.catch(function(error) {
  console.log("Error: " + error);
})