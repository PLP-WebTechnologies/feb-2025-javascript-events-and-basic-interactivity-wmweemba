// Objective 1: Use event listeners effectively
// Slider to dynamically resize the image using an event listener on slider movement
const imageSizeSlider = document.getElementById('imageSizeSlider');
const resizableImage = document.getElementById('resizableImage');

imageSizeSlider.addEventListener('input', () => {
    const newSize = imageSizeSlider.value;
    resizableImage.style.width = `${newSize}px`;
    resizableImage.style.height = 'auto';
});

// Objective 2: Implement form validation
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission behaviour for validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('All fields are required!');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address!');
        return;
    }

    alert('Form submitted successfully!');
    contactForm.reset(); // Reset the form after successful submission
});

// Helper function to validate email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Objective 3: Add interactive elements (Modal functionality)
const openModalButton = document.getElementById('openModalButton');
const closeModalButton = document.getElementById('closeModalButton');
const modal = document.getElementById('myModal');

openModalButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

const closeModalButtonSecondary = document.getElementById('closeModalButtonSecondary');

closeModalButtonSecondary.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});