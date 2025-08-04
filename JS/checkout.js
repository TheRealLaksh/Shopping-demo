// Checkout logic
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