let categoriaBuscada = location.search;
let nombreCategoria = new URLSearchParams(categoriaBuscada);

let categorySlug = nombreCategoria.get("category"); // Me debe devolver el nombre de la categoria del query, por ejemplo "smartphones"

let tituloCategoria = document.querySelector(".name_category");
tituloCategoria.innerText = categorySlug; //titulo de la categoria
tituloCategoria.style.textTransform = "capitalize"; // Como use el Slug y no Name, del title, esta en minuscula, por eso lo modifique con style, para que la primera se mayus

let url = `https://dummyjson.com/products/category/${categorySlug}`;

fetch(url)
.then(function(response) {
  return response.json()
})
.then(function(data) {
   let productos = data.products ; // aca tomo el array del OBJ donde contiene la lista de propiedades de cada producto de las categorias
   let seccionCategory = document.querySelector(".categorias");
   let cardProductos = "";
   for (let i = 0; i < productos.length; i++) {
    cardProductos += `
        <article>
                <div>
                    <img src="${productos[i].images[0]}" alt="${productos[i].title}">
                    <h3>${productos[i].title}</h3>
                    <p>${productos[i].description}</p>
                </div>
                <div>
                    <p class="precio">Precio: ${productos[i].price}</p>
                    <a href="./product.html?id=${productos[i].id}" class="boton-detalle">Ver detalle</a>
                </div>
        </article>
    `}
    seccionCategory.innerHTML = cardProductos;

})
.catch(function(error) {
  console.log("Error: " + error);
})

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