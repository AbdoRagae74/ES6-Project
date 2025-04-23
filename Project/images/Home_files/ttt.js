let globalProducts = []; // Declare in global scope
const productContainer = document.querySelector('.product-container');

async function fetchProducts() {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    globalProducts = data.products; // Assign to global variable
      return await globalProducts;
  } catch (error) {
    console.error('Error:', error);
  }
}

async function getData() {
    products = await fetchProducts();  
    let x = 0;
    for(var i of products ) 
    {
        x++;
        if(x==6) break;
        console.log(i);
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
          <div class="product-image">
            <img src="${i.thumbnail}" class="product-thumb" ">
            <button class="card-btn" data-id="${i.id}">Add to wishlist</button>
          </div>
          <div class="product-info">
            <h2 class="product-brand">${i.title}</h2>
            <p class="product-short-description">${i.description}</p>
            <span class="price">$${i.price}</span>
          </div>
        `;
        
        productContainer.appendChild(productCard); 
    }
    document.querySelectorAll('.card-btn').forEach(button => {
        button.addEventListener('click', (e) => {
          const productId = e.target.dataset.id;
          console.log(productId);
          console.log(products[productId-1].price);
        });
      });
    
        
}


// getData();

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})



