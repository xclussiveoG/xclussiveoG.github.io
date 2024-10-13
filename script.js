// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form validation and submission handling
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate form
    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Simulate form submission (this is where you'd normally send the data to a server)
    alert('Thank you, ' + name + '! Your message has been sent successfully.');
    document.querySelector('form').reset();
});

// Email validation function
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Example of a function to dynamically load cars (for car sales or rentals section)
function loadCars() {
    const cars = [
        { model: 'Toyota Camry', year: 2021, price: 30000, type: 'New' },
        { model: 'Honda Accord', year: 2020, price: 25000, type: 'Used' },
        { model: 'Tesla Model 3', year: 2022, price: 45000, type: 'New' }
    ];

    const carContainer = document.getElementById('car-list');
    carContainer.innerHTML = ''; // Clear existing cars

    cars.forEach(car => {
        const carItem = document.createElement('div');
        carItem.className = 'car-item';
        carItem.innerHTML = `
            <h4>${car.model} (${car.year})</h4>
            <p>Type: ${car.type}</p>
            <p>Price: $${car.price}</p>
        `;
        carContainer.appendChild(carItem);
    });
}
