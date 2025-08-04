// Load services section
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