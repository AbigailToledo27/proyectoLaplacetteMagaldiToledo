let identificador = location.search;
let identificadorObj = new URLSearchParams(identificador);

let id = identificadorObj.get('id');

fetch(`https://dummyjson.com/products/${id}`) 
    .then(function(res){
        return res.json();
    })
    .then(function(info){
        let productoInfo = info
        console.log(data);
        
        let producto = document.querySelector(".detalleproducto")

        let carga = ` <div class="divsproducto">
        <img src=${info.images[0]} alt="foto detalle de producto" class="fotoproducto">
        <h3><a href="./category.html" class="category">Categoría: </a></h3>
        <h2 class="precioprod">Precio: </h2>
        <p class="tagsproducto"></p>
    </div>
    <div class="divsproducto">
        <div>
        <h1 class="nombreproducto"></h1>
        <h2 class="titulodescripción">Descripción:</h2>
        <p class="descripción"></p>
        <p class="stockproducto">Stock: </p>
    </div> 
    <div class="reviwsproducto">
        <h3 class="nombre reviews">Reviews de Usuarios:</h3>
        <p class="usuario1 nombre"></p> 
        <p class="fecha1"></p>
        <p class="opinion1"></p>
        <p class="rating1">Rating: </p>
        <p class="usuario2 nombre"></p>
        <p class="fecha2"></p>
        <p class="opinion2"></p>
        <p class="rating2">Rating: </p>
    </div>
    </div>`
    producto.innerHTML = carga 

    })
    .catch(function (err) {
        console.log("Error" + err);

    })

