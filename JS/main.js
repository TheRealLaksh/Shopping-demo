document.addEventListener('DOMContentLoaded', function() {
    // Call only the functions needed for this page
    loadCategories && loadCategories();
    loadFeaturedProducts && loadFeaturedProducts();
    loadServices && loadServices();
    loadTestimonials && loadTestimonials();
    setupContactForm && setupContactForm();
    updateCartDisplay && updateCartDisplay();
    setupEventListeners && setupEventListeners();
});
