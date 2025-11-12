let identificador = location.search;
let identificadorObj = new URLSearchParams(identificador);

let id = identificadorObj.get('id');

fetch(`https://dummyjson.com/products/${id}`) 
    .then(function(res){
        return res.json();
    })
    .then(function(info){
        let data = info
        let nombreprod = document.querySelector('.nombreproducto')
        nombreprod.innerText = data.title
        let descrip = document.querySelector('.descripción')
        descrip.innerText = data.description
        let stock = document.querySelector('.stockproducto')
        stock.innerText += data.stock
        let nomusuario1 = document.querySelector('.usuario1')
        nomusuario1.innerText = data.reviews[0].reviewerName
        let fechacomentario1 = document.querySelector('.fecha1')
        fechacomentario1.innerText = data.reviews[0].date
        let comentario1 = document.querySelector('.opinion1')
        comentario1.innerText = data.reviews[0].comment
        let rating1 = document.querySelector('.rating1')
        rating1.innerText += data.reviews[0].rating
        let nomusuario2 = document.querySelector('.usuario2')
        nomusuario2.innerText = data.reviews[1].reviewerName
        let fechacomentario2 = document.querySelector('.fecha2')
        fechacomentario2.innerText = data.reviews[1].date
        let comentario2 = document.querySelector('.opinion2')
        comentario2.innerText = data.reviews[1].comment
        let rating2 = document.querySelector('.rating2')
        rating2.innerText += data.reviews[1].rating
        let imagen = document.querySelector('.fotoproducto')
        imagen.src = data.images
        let categoria = document.querySelector('.category')
        categoria.innerText += data.category
        let precio = document.querySelector('.precioprod')
        precio.innerText += data.price
        let tags = document.querySelector('.tagsproducto')
        tags.innerText = data.tags
    })
    .catch(function(err){
        console.log("Error" + err);
        
    })
    
