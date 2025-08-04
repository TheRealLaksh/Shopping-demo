// Load categories section
function loadCategories() {
    const html = storeData.categories.map(category => `
        <div class="category-card" onclick="window.location.href='category.html?cat=${category.id}'">
            <div class="category-icon">${category.icon}</div>
            <h3>${category.name}</h3>
            <p>${category.description}</p>
            <div class="sample-products">
                <strong>Sample Products:</strong>
                <ul>
                  ${category.sampleProducts.map(p => `<li>${p.name} - ₹${p.price}/${p.unit}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
    document.getElementById('categoriesGrid').innerHTML = html;
}

// Show category products
function showCategoryProducts(categoryId) {
    const category = storeData.categories.find(cat => cat.id === categoryId);
    const products = storeData.products.filter(product => product.category === categoryId);
    
    alert(`${category.name}\n\nAvailable products: ${products.length}\n\n${products.slice(0, 5).map(p => `• ${p.name} - ₹${p.price}/${p.unit}`).join('\n')}${products.length > 5 ? '\n...and more!' : ''}`);
}