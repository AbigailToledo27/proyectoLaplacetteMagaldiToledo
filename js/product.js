let identificador = location.search;
let identificadorObj = new URLSearchParams(identificador);

let id = identificadorObj.get('id');

fetch(`https://dummyjson.com/products/${id}`) 
    .then(function(res){
        return res.json();
    })
    .then(function(info){
        let productoInfo = info
        console.log(productoInfo); // Para ver la info de la api, después hay q borrarlo
        
        // Linea 22 --> Quiero agregarle un for para q todos los tags tengan su #, si no queda feito
        
        let producto = document.querySelector(".detalleproducto") 

        let carga = `<div class="divsproducto">
                <img src=${productoInfo.images[0]} alt="foto detalle de producto" class="fotoproducto">
                <h3><a href="./category.html" class="category">Categoría: ${productoInfo.category} </a></h3>
                <h2 class="precioprod">Precio: ${productoInfo.price}</h2>
                <p class="tagsproducto">#${productoInfo.tags[0]} #${productoInfo.tags[1]}</p> 
            </div>
            <div class="divsproducto">
                <div>
                    <h1 class="nombreproducto">${productoInfo.title}</h1>
                    <h2 class="titulodescripción">Descripción:</h2>
                    <p class="descripción">${productoInfo.description}</p>
                    <p class="stockproducto">Stock: ${productoInfo.stock}</p>
                </div>
            `
        
                for (let i=0; i<productoInfo.reviews.length; i++){
                    carga += //Para q se agreguen a carga todos los reviews 
                    `<div class="reviwsproducto">
                        <h3 class="nombre reviews">Reviews de Usuarios:</h3>
                        <p class="usuario nombre">${productoInfo.reviews[i].reviewerName}</p> 
                        <p class="fecha">${productoInfo.reviews[i].date}</p>
                        <p class="opinion">${productoInfo.reviews[i].comment}</p>
                        <p class="rating">Rating: ${productoInfo.reviews[i].rating}</p>
                     </div>
                `}; //</div> queda abierto el div grande... esta mal en cuestión syntaxis perooooo anda REVISAR
        
        
        producto.innerHTML = carga 

    })
    .catch(function (err) {
        console.log("Error" + err);

    })

