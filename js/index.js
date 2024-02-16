document.addEventListener('DOMContentLoaded', getProducts);

async function getProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    
    const productsList = document.getElementById('productsList');
    
    data.forEach(product => {
      const productCard = createProductCard(product);
      productsList.appendChild(productCard);
    });
  } catch (error) {
    console.error('Error al obtener productos:', error);
  }
}

function createProductCard(product) {
  const productCard = document.createElement('div');
  productCard.classList.add('col-lg-4', 'col-md-6', 'mb-4');
  
  const card = `
    <div class="card mb-5" >
      <img src="${product.image}" class="card-img-top" alt="${product.title}">
      <div class="card-body">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text">${product.description}</p>
        <p class="card-text">Precio: $${product.price}</p>
        <p class="card-text">Categoría: ${product.category}</p>
      </div>
    </div>
  `;
  
  productCard.innerHTML = card;
  return productCard;
}
