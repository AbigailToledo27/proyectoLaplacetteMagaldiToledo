let url = "https://dummyjson.com/products/categories";
fetch(url)
.then(function(response) {
  return response.json()
})
.then(function(data) {
    let infoCategory = document.querySelector("#navCategorias"); //Data es un Array de Objetos de categoria con: "slug", "name" , "url"
    let barraCategory = "";
    for (let i = 0; i < data.length; i++) {
        barraCategory += 
        `
        <li class="category"><a href="${data[i].url}">${data[i].name}</a></li>
        `;
    }
    infoCategory.innerHTML = barraCategory; 
})
.catch(function(error) {
  console.log("Error: " + error);
})