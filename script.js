// Get elements
const openModalBtn = document.getElementById('openModal');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal');

// Open modal when button is clicked
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Close modal when close button is clicked
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside modal-content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});