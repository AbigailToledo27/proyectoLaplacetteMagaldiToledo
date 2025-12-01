let identificador = location.search;
let identificadorObj = new URLSearchParams(identificador);

let id = identificadorObj.get('id');

fetch(`https://dummyjson.com/products/${id}`)
    .then(function (res) {
        return res.json();
    })
    .then(function (info) {
        let productoInfo = info

        let producto = document.querySelector(".detalleproducto")
        let tagsProducto = "";
        for (let i = 0; i < productoInfo.tags.length; i++) {
            const element = productoInfo.tags[i];
            tagsProducto += `#${element} `;
        }

        let carga = `<div class="divsproducto">
                <img src=${productoInfo.images[0]} alt="foto detalle de producto" class="fotoproducto">
                <h3><a href="./category.html?category=${productoInfo.category}" class="category">Categoría: ${productoInfo.category} </a></h3>
                <h2 class="precioprod">Precio: $${productoInfo.price}</h2>
                <p class="tagsproducto">${tagsProducto}</p> 
            </div>
            <div class="divsproducto">
                <div>
                    <h1 class="nombreproducto">${productoInfo.title}</h1>
                    <h2 class="titulodescripción">Marca: ${productoInfo.brand}</h2>
                    <h2 class="titulodescripción">Descripción:</h2>
                    <p class="descripción">${productoInfo.description}</p>
                    <p class="stockproducto">Stock: ${productoInfo.stock}</p>
                </div>
            `
        carga += `<div class="reviwsproducto">
                        <h3 class="nombre reviews">Reviews de Usuarios:</h3>
                   </div> `


        for (let i = 0; i < productoInfo.reviews.length; i++) {
            carga += `
                    <div class="reviwsproducto">
                        <p class="usuario nombre">${productoInfo.reviews[i].reviewerName}</p> 
                        <p class="fecha">${productoInfo.reviews[i].date}</p>
                        <p class="opinion">${productoInfo.reviews[i].comment}</p>
                        <p class="rating">Rating: ${productoInfo.reviews[i].rating}</p>
                     </div>
                `};

        carga += `</div>`;


        producto.innerHTML = carga

    })
    .catch(function (err) {
        console.log("Error" + err);

    })


// Barra de búsqueda
let inputBusqueda = document.querySelector('#searchInput');
let mensajeError = document.querySelector('.error-message');
let formHeader = document.querySelector('.barra-busqueda');

formHeader.addEventListener('submit', function (event) {
    event.preventDefault();
    if (inputBusqueda.value.length < 3) {
        mensajeError.style.display = 'block';
        if (inputBusqueda.value === "") {
            mensajeError.innerText = 'Estas GAGA, pone algo de texto para buscar'; //Preguntar si este texto está bien o es DEMASIADO FORMAL para el TP
        }
        else {
            mensajeError.innerText = 'La búsqueda debe tener al menos 3 caracteres';
        }
    }
    else {
        this.submit();
    }
});