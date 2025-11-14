let identificador = location.search;
let identificadorObj = new URLSearchParams(identificador);

let inputBusqueda = document.getElementById('searchInput');
let mensajeError = document.querySelector('.error-message');

let mensajeSinResultados = document.querySelector('.sin-results');

let espacioProductos = document.querySelector('.contenedor-productos');
let busqueda = identificadorObj.get('search');

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

fetch(`https://dummyjson.com/products/search?q=${busqueda}`) 
    .then(function(res){
        return res.json();
    })
    .then(function(info){
        let productos = info.products
        console.log(productos);
        if (productos.length === 0) {
            mensajeSinResultados.style.display = 'block';
        }
        else {
            for (let i = 0; i < productos.length; i++) {
                producto = productos[i];
                espacioProductos.innerHTML += `
                <article class="producto">
                    <img src="${producto.images[0]}" alt="${producto.title}">
                    <h3>${producto.title}</h3>
                    <p>${producto.description}</p>
                    <p class="precio">$${producto.price}</p>
                    <a href="./product.html?id=${producto.id}" class="boton-detalle">Ver detalle</a>
                </article>
                `;
            }
        }
    })
    .catch(function(err){
        console.log("Error" + err);
        
    })
    
