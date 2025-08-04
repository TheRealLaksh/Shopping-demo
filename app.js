// Store data
const storeData = {
  "store": {
    "name": "Laksh's Store",
    "tagline": "No Delivery Charges - Shop with Ease!",
    "phone": "+91-9876543210",
    "address": "123 Main Street, Your City",
    "hours": "Mon-Sun: 8:00 AM - 10:00 PM",
    "email": "contact@lakshstore.com"
  },
  "categories": [
    {
      "id": "groceries",
      "name": "Groceries & Staples",
      "icon": "🛒",
      "description": "Fresh groceries and daily essentials"
    },
    {
      "id": "snacks",
      "name": "Snacks & Chips", 
      "icon": "🍿",
      "description": "Crispy snacks and munchies"
    },
    {
      "id": "beauty",
      "name": "Beauty & Personal Care",
      "icon": "🧴",
      "description": "Personal care and beauty products"
    },
    {
      "id": "beverages",
      "name": "Beverages",
      "icon": "🥤",
      "description": "Refreshing drinks and beverages"
    },
    {
      "id": "biscuits",
      "name": "Biscuits & Confectionery",
      "icon": "🍪",
      "description": "Sweet treats and biscuits"
    },
    {
      "id": "household",
      "name": "Household Essentials",
      "icon": "🏠",
      "description": "Cleaning and household items"
    }
  ],
  "products": [
    {"id": 1, "name": "Basmati Rice", "price": 80, "unit": "kg", "category": "groceries", "featured": true},
    {"id": 2, "name": "Regular Rice", "price": 60, "unit": "kg", "category": "groceries"},
    {"id": 3, "name": "Brown Rice", "price": 90, "unit": "kg", "category": "groceries"},
    {"id": 4, "name": "Wheat Flour", "price": 45, "unit": "kg", "category": "groceries"},
    {"id": 5, "name": "All Purpose Flour", "price": 50, "unit": "kg", "category": "groceries"},
    {"id": 6, "name": "Sugar", "price": 42, "unit": "kg", "category": "groceries"},
    {"id": 7, "name": "Salt", "price": 20, "unit": "kg", "category": "groceries"},
    {"id": 8, "name": "Sunflower Oil", "price": 120, "unit": "ltr", "category": "groceries", "featured": true},
    {"id": 9, "name": "Mustard Oil", "price": 130, "unit": "ltr", "category": "groceries"},
    {"id": 10, "name": "Pulses (Dal)", "price": 90, "unit": "kg", "category": "groceries"},
    {"id": 11, "name": "Onions", "price": 30, "unit": "kg", "category": "groceries"},
    {"id": 12, "name": "Potatoes", "price": 25, "unit": "kg", "category": "groceries"},
    {"id": 13, "name": "Tomatoes", "price": 35, "unit": "kg", "category": "groceries"},
    {"id": 14, "name": "Ginger-Garlic Paste", "price": 45, "unit": "bottle", "category": "groceries"},
    {"id": 15, "name": "Lays Classic", "price": 20, "unit": "pack", "category": "snacks", "featured": true},
    {"id": 16, "name": "Kurkure", "price": 15, "unit": "pack", "category": "snacks"},
    {"id": 17, "name": "Haldiram Namkeen", "price": 35, "unit": "pack", "category": "snacks"},
    {"id": 18, "name": "Bingo Mad Angles", "price": 18, "unit": "pack", "category": "snacks"},
    {"id": 19, "name": "Uncle Chips", "price": 12, "unit": "pack", "category": "snacks"},
    {"id": 20, "name": "Popcorn", "price": 25, "unit": "pack", "category": "snacks"},
    {"id": 21, "name": "Mixture", "price": 40, "unit": "kg", "category": "snacks"},
    {"id": 22, "name": "Peanuts", "price": 80, "unit": "kg", "category": "snacks"},
    {"id": 23, "name": "Face Wash (Himalaya)", "price": 85, "unit": "bottle", "category": "beauty"},
    {"id": 24, "name": "Face Wash (Garnier)", "price": 95, "unit": "bottle", "category": "beauty"},
    {"id": 25, "name": "Face Cream (Pond's)", "price": 120, "unit": "jar", "category": "beauty", "featured": true},
    {"id": 26, "name": "Face Cream (Olay)", "price": 180, "unit": "jar", "category": "beauty"},
    {"id": 27, "name": "Soap (Dove)", "price": 45, "unit": "bar", "category": "beauty"},
    {"id": 28, "name": "Soap (Lux)", "price": 35, "unit": "bar", "category": "beauty"},
    {"id": 29, "name": "Shampoo (Head & Shoulders)", "price": 180, "unit": "bottle", "category": "beauty"},
    {"id": 30, "name": "Shampoo (Pantene)", "price": 160, "unit": "bottle", "category": "beauty"},
    {"id": 31, "name": "Hair Oil", "price": 95, "unit": "bottle", "category": "beauty"},
    {"id": 32, "name": "Toothpaste", "price": 65, "unit": "tube", "category": "beauty"},
    {"id": 33, "name": "Toothbrush", "price": 35, "unit": "piece", "category": "beauty"},
    {"id": 34, "name": "Coca Cola (500ml)", "price": 35, "unit": "bottle", "category": "beverages"},
    {"id": 35, "name": "Pepsi (500ml)", "price": 35, "unit": "bottle", "category": "beverages"},
    {"id": 36, "name": "Fresh Lime Water", "price": 25, "unit": "glass", "category": "beverages"},
    {"id": 37, "name": "Mango Juice", "price": 40, "unit": "bottle", "category": "beverages", "featured": true},
    {"id": 38, "name": "Mineral Water", "price": 15, "unit": "bottle", "category": "beverages"},
    {"id": 39, "name": "Tea", "price": 120, "unit": "pack", "category": "beverages"},
    {"id": 40, "name": "Coffee", "price": 180, "unit": "pack", "category": "beverages"},
    {"id": 41, "name": "Energy Drinks", "price": 45, "unit": "can", "category": "beverages"},
    {"id": 42, "name": "Parle-G", "price": 12, "unit": "pack", "category": "biscuits"},
    {"id": 43, "name": "Oreo", "price": 25, "unit": "pack", "category": "biscuits", "featured": true},
    {"id": 44, "name": "Good Day", "price": 30, "unit": "pack", "category": "biscuits"},
    {"id": 45, "name": "Monaco", "price": 18, "unit": "pack", "category": "biscuits"},
    {"id": 46, "name": "Marie Gold", "price": 22, "unit": "pack", "category": "biscuits"},
    {"id": 47, "name": "Chocolates", "price": 35, "unit": "bar", "category": "biscuits"},
    {"id": 48, "name": "Candies", "price": 5, "unit": "piece", "category": "biscuits"},
    {"id": 49, "name": "Cookies", "price": 40, "unit": "pack", "category": "biscuits"},
    {"id": 50, "name": "Detergent Powder", "price": 85, "unit": "kg", "category": "household"},
    {"id": 51, "name": "Dishwash Liquid", "price": 65, "unit": "bottle", "category": "household"},
    {"id": 52, "name": "Floor Cleaner", "price": 75, "unit": "bottle", "category": "household"},
    {"id": 53, "name": "Tissue Papers", "price": 45, "unit": "pack", "category": "household"},
    {"id": 54, "name": "Toilet Paper", "price": 120, "unit": "roll", "category": "household"}
  ],
  "testimonials": [
    {
      "name": "Priya Sharma",
      "rating": 5,
      "comment": "Best local store! Fresh products and no delivery charges. Highly recommended!"
    },
    {
      "name": "Rajesh Kumar",
      "rating": 5,
      "comment": "Great service and quality products. The QR payment system is very convenient."
    },
    {
      "name": "Anita Gupta",
      "rating": 4,
      "comment": "Good variety of products and friendly staff. Quick delivery service."
    }
  ],
  "services": [
    {
      "title": "Free Delivery",
      "description": "No delivery charges on all orders",
      "icon": "🚚"
    },
    {
      "title": "Fresh Products",
      "description": "Quality assured fresh groceries",
      "icon": "🥬"
    },
    {
      "title": "Quick Service",
      "description": "Fast and efficient order processing",
      "icon": "⚡"
    },
    {
      "title": "QR Payment",
      "description": "Easy and secure QR code payments",
      "icon": "📱"
    }
  ]
};

// Global variables
let cart = [];
let currentProduct = null;

// DOM Elements
const categoriesGrid = document.getElementById('categoriesGrid');
const featuredProducts = document.getElementById('featuredProducts');
const servicesGrid = document.getElementById('servicesGrid');
const testimonialsGrid = document.getElementById('testimonialsGrid');
const productModal = document.getElementById('productModal');
const cartModal = document.getElementById('cartModal');
const checkoutPage = document.getElementById('checkoutPage');
const cartBtn = document.getElementById('cartBtn');
const cartCount = document.getElementById('cartCount');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadCategories();
    loadFeaturedProducts();
    loadServices();
    loadTestimonials();
    setupEventListeners();
    updateCartDisplay();
});

// Load categories
function loadCategories() {
    const html = storeData.categories.map(category => `
        <div class="category-card" onclick="showCategoryProducts('${category.id}')">
            <div class="category-icon">${category.icon}</div>
            <h3>${category.name}</h3>
            <p>${category.description}</p>
        </div>
    `).join('');
    categoriesGrid.innerHTML = html;
}

// Load featured products
function loadFeaturedProducts() {
    const featured = storeData.products.filter(product => product.featured);
    const html = featured.map(product => `
        <div class="product-card" onclick="showProductModal(${product.id})">
            <div class="product-name">${product.name}</div>
            <div class="product-price">₹${product.price}/${product.unit}</div>
            <button class="btn btn--primary btn--sm" onclick="event.stopPropagation(); quickAddToCart(${product.id})">Quick Add</button>
        </div>
    `).join('');
    featuredProducts.innerHTML = html;
}

// Load services
function loadServices() {
    const html = storeData.services.map(service => `
        <div class="service-card">
            <div class="service-icon">${service.icon}</div>
            <h4>${service.title}</h4>
            <p>${service.description}</p>
        </div>
    `).join('');
    servicesGrid.innerHTML = html;
}

// Load testimonials
function loadTestimonials() {
    const html = storeData.testimonials.map(testimonial => `
        <div class="testimonial-card">
            <div class="testimonial-rating">${'★'.repeat(testimonial.rating)}${'☆'.repeat(5 - testimonial.rating)}</div>
            <p class="testimonial-comment">"${testimonial.comment}"</p>
            <p class="testimonial-name">- ${testimonial.name}</p>
        </div>
    `).join('');
    testimonialsGrid.innerHTML = html;
}

// Show category products (simplified - in real app would navigate to products page)
function showCategoryProducts(categoryId) {
    const category = storeData.categories.find(cat => cat.id === categoryId);
    const products = storeData.products.filter(product => product.category === categoryId);
    
    alert(`${category.name}\n\nAvailable products: ${products.length}\n\n${products.slice(0, 5).map(p => `• ${p.name} - ₹${p.price}/${p.unit}`).join('\n')}${products.length > 5 ? '\n...and more!' : ''}`);
}

// Show product modal
function showProductModal(productId) {
    currentProduct = storeData.products.find(product => product.id === productId);
    
    document.getElementById('modalProductName').textContent = currentProduct.name;
    document.getElementById('modalProductPrice').textContent = currentProduct.price;
    document.getElementById('modalProductUnit').textContent = currentProduct.unit;
    document.getElementById('modalQuantity').value = 1;
    
    productModal.classList.remove('hidden');
}

// Quick add to cart
function quickAddToCart(productId) {
    const product = storeData.products.find(p => p.id === productId);
    addToCart(product, 1);
}

// Add to cart
function addToCart(product, quantity) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            unit: product.unit,
            quantity: quantity
        });
    }
    
    updateCartDisplay();
    showCartNotification(`${product.name} added to cart!`);
}

// Update cart display
function updateCartDisplay() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Show cart notification
function showCartNotification(message) {
    // Simple alert for now - in real app would show a toast notification
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--color-success);
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        z-index: 1001;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Show cart modal
function showCartModal() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: var(--color-text-secondary);">Your cart is empty</p>';
        cartTotal.textContent = '0';
    } else {
        const html = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">₹${item.price}/${item.unit}</div>
                </div>
                <div class="cart-item-quantity">
                    <button class="qty-btn" onclick="updateCartQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="updateCartQuantity(${item.id}, 1)">+</button>
                    <button class="btn btn--outline btn--sm" onclick="removeFromCart(${item.id})" style="margin-left: 8px;">Remove</button>
                </div>
            </div>
        `).join('');
        
        cartItems.innerHTML = html;
        
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = total;
    }
    
    cartModal.classList.remove('hidden');
}

// Update cart quantity
function updateCartQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartDisplay();
            showCartModal(); // Refresh cart modal
        }
    }
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
    showCartModal(); // Refresh cart modal
}

// Clear cart
function clearCart() {
    cart = [];
    updateCartDisplay();
    showCartModal(); // Refresh cart modal
}

// Show checkout page
function showCheckoutPage() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    // Populate checkout items
    const checkoutItems = document.getElementById('checkoutItems');
    const checkoutTotal = document.getElementById('checkoutTotal');
    
    const html = cart.map(item => `
        <div class="checkout-item">
            <div>
                <strong>${item.name}</strong><br>
                <small>₹${item.price}/${item.unit} × ${item.quantity}</small>
            </div>
            <div>₹${item.price * item.quantity}</div>
        </div>
    `).join('');
    
    checkoutItems.innerHTML = html;
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    checkoutTotal.textContent = total;
    
    // Hide modals and show checkout page
    cartModal.classList.add('hidden');
    checkoutPage.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Back to store
function backToStore() {
    checkoutPage.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Confirm order
function confirmOrder() {
    const customerName = document.getElementById('customerName').value;
    const customerPhone = document.getElementById('customerPhone').value;
    const customerAddress = document.getElementById('customerAddress').value;
    
    if (!customerName || !customerPhone || !customerAddress) {
        alert('Please fill in all customer details.');
        return;
    }
    
    // In a real application, this would send the order to a server
    const orderDetails = {
        customer: {
            name: customerName,
            phone: customerPhone,
            address: customerAddress
        },
        items: cart,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        timestamp: new Date().toISOString()
    };
    
    // Simulate sending email to owner
    console.log('Order details to be emailed to owner:', orderDetails);
    
    alert(`Thank you ${customerName}! Your order has been confirmed.\n\nTotal: ₹${orderDetails.total}\n\nPlease scan the QR code to make payment and call +91-9876543210 to confirm your order.\n\nYour order will be processed and delivered soon!`);
    
    // Clear cart and reset form
    cart = [];
    updateCartDisplay();
    document.getElementById('checkoutForm').reset();
    backToStore();
}

// Smooth scrolling
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Setup event listeners
function setupEventListeners() {
    // Cart button
    cartBtn.addEventListener('click', showCartModal);
    
    // Modal close buttons
    document.getElementById('closeModal').addEventListener('click', () => {
        productModal.classList.add('hidden');
    });
    
    document.getElementById('closeCartModal').addEventListener('click', () => {
        cartModal.classList.add('hidden');
    });
    
    // Quantity controls in product modal
    document.getElementById('decreaseQty').addEventListener('click', () => {
        const qtyField = document.getElementById('modalQuantity');
        const currentQty = parseInt(qtyField.value);
        if (currentQty > 1) {
            qtyField.value = currentQty - 1;
        }
    });
    
    document.getElementById('increaseQty').addEventListener('click', () => {
        const qtyField = document.getElementById('modalQuantity');
        const currentQty = parseInt(qtyField.value);
        qtyField.value = currentQty + 1;
    });
    
    // Add to cart from modal
    document.getElementById('addToCartBtn').addEventListener('click', () => {
        if (currentProduct) {
            const quantity = parseInt(document.getElementById('modalQuantity').value);
            addToCart(currentProduct, quantity);
            productModal.classList.add('hidden');
        }
    });
    
    // Cart actions
    document.getElementById('clearCart').addEventListener('click', clearCart);
    document.getElementById('checkoutBtn').addEventListener('click', showCheckoutPage);
    
    // Checkout actions
    document.getElementById('backToStore').addEventListener('click', backToStore);
    document.getElementById('confirmOrderBtn').addEventListener('click', confirmOrder);
    
    // Contact form
    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        alert(`Thank you ${name}! Your message has been sent. We'll get back to you soon at ${email}.`);
        document.getElementById('contactForm').reset();
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === productModal) {
            productModal.classList.add('hidden');
        }
        if (e.target === cartModal) {
            cartModal.classList.add('hidden');
        }
    });
    
    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href').substring(1);
            scrollToSection(sectionId);
        });
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (!productModal.classList.contains('hidden')) {
                productModal.classList.add('hidden');
            }
            if (!cartModal.classList.contains('hidden')) {
                cartModal.classList.add('hidden');
            }
            if (!checkoutPage.classList.contains('hidden')) {
                backToStore();
            }
        }
    });
}

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
@keyframes slideIn {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}
`;
document.head.appendChild(style);