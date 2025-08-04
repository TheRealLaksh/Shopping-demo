// Load testimonials section
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