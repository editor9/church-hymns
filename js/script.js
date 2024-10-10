const inputElement = document.getElementById('image-input');
const imgElement = document.getElementById('selected-image');
const errorMessage = document.getElementById('error-message');
const bookSelect = document.getElementById('book-select');
const categorySelect = document.getElementById('category-select');
const categoryContainer = document.getElementById('category-container');
let currentBook = 'img1'; // Default to 'img1' for Book 1

// Define categories for each book
const categories = {
    '1': [
        { value: 1, text: 'التسبيح والعبادة (56 - 1)' },
        { value: 2, text: 'الفداء (105 - 57)' },
        { value: 3, text: 'القيامة (114 - 106)' },
        { value: 4, text: 'السماء والمجيء الثاني (150 - 115)' },
        { value: 5, text: 'البنيان (256 - 151)' },
        { value: 6, text: 'الخلاص (293 - 257)' },
        { value: 7, text: 'الزواج (300 - 294)' },
        { value: 8, text: 'دليل الترانيم (315 - 301)' },
    ],
    '2': [
        { value: 1, text: 'Category 1 for Book 2' },
        { value: 2, text: 'Category 2 for Book 2' },
        { value: 3, text: 'Category 3 for Book 2' },
        { value: 4, text: 'Category 4 for Book 2' },
        { value: 5, text: 'Category 5 for Book 2' },
        { value: 6, text: 'Category 6 for Book 2' },
        { value: 7, text: 'Category 7 for Book 2' },
        { value: 8, text: 'Category 8 for Book 2' },
    ]
};

// Update the image folder when the book selection changes
bookSelect.addEventListener('change', function() {
    const selectedBook = bookSelect.value;
    currentBook = selectedBook === '1' ? 'img1' : 'img2'; // Use 'img1' for Book 1 and 'img2' for Book 2
    updateCategories(selectedBook); // Call to update categories
    updateImage(); // Call to refresh image based on new selection
});

// Function to update categories based on selected book
function updateCategories(book) {
    // Clear current options
    categorySelect.innerHTML = '';

    // Populate the dropdown with new categories
    categories[book].forEach(category => {
        const option = document.createElement('option');
        option.value = category.value;
        option.textContent = category.text;
        categorySelect.appendChild(option);
    });
}

// Function to update image based on input and selected book
inputElement.addEventListener('input', function() {
    updateImage();
});

function updateImage() {
    const value = inputElement.value;

    // Check if the entered value is between 1 and 315
    if (value >= 1 && value <= 315) {
        // Update the image source based on the entered value and selected book
        const imagePath = currentBook + '/' + value + '.jpg';
        imgElement.src = imagePath;
        imgElement.style.display = 'block'; // Show the image
        errorMessage.style.display = 'none'; // Hide error message

        // Check if the image exists by setting up an error handler
        imgElement.onerror = function() {
            imgElement.style.display = 'none';
            errorMessage.style.display = 'block';
            errorMessage.textContent = 'Image not found.';
        };
    } else {
        // Show error message if the input is not valid
        imgElement.style.display = 'none'; // Hide the image
        errorMessage.style.display = 'block'; // Show error message
        errorMessage.textContent = 'Please enter a valid number between 1 and 315.';
    }
}

// Initial call to populate categories based on the default book selection (Book 1)
document.addEventListener('DOMContentLoaded', function() {
    updateCategories('1'); // Set categories for Book 1 as default
    updateImage(); // Display the default image (1.jpg) for Book 1
});