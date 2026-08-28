document.addEventListener('DOMContentLoaded', () => {
  const productGrid = document.getElementById('productGrid');

  if (!productGrid) {
    return;
  }

  fetch('products.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Unable to load products: ${response.status}`);
      }

      return response.json();
    })
    .then(products => {
      productGrid.replaceChildren();

      products.forEach(product => {
        const card = document.createElement('article');
        card.className = 'product-card';

        const image = document.createElement('img');
        image.className = 'card-image';
        image.src = `assets/${product.image}`;
        image.alt = product.name;
        image.loading = 'lazy';

        const content = document.createElement('div');
        content.className = 'card-content';

        const name = document.createElement('h3');
        name.textContent = product.name;

        const category = document.createElement('p');
        category.className = 'category';
        category.textContent = product.category;

        const price = document.createElement('p');
        price.className = 'price';
        price.textContent = `XAF ${product.price.toLocaleString('en-US')}`;

        content.append(name, category, price);
        card.append(image, content);
        productGrid.appendChild(card);
      });
    })
    .catch(error => {
      productGrid.textContent = 'Unable to load products right now.';
      console.error(error);
    });
});