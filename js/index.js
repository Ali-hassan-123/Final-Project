  

var productSection = document.getElementById("productSection");

async function fetchData() {
  try {
    let productApi = await fetch("https://fakestoreapi.com/products");
    productApi = await productApi.json();

    for (var i = 0; i < productApi.length; i++) {
      // Truncate title and description if too long
      const truncatedTitle =
        productApi[i].title.length > 20
          ? productApi[i].title.substring(0, 20) + "..."
          : productApi[i].title;

      const truncatedDescription =
        productApi[i].description.length > 100
          ? productApi[i].description.substring(0, 100) + "..."
          : productApi[i].description;

      productSection.innerHTML += `<div class="card" style="width: 18rem">
        <img src="${productApi[i].image}" class="card-img-top" alt="..." 
             style="height: 200px; width: auto; object-fit: contain;" />
        <div class="card-body">
          <h5 class="card-title">${truncatedTitle}</h5>
          <p class="card-text">
          ${truncatedDescription}
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`;
    }
  } catch (error) {
    console.log(error);
  }
}

fetchData();
