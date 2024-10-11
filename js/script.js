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
        { value: 1, text: 'التسبيح والعبادة (16 - 1)' },
        { value: 2, text: 'الفداء (44 - 17)' },
        { value: 3, text: 'القيامة (47 - 45)' },
        { value: 4, text: 'السماء والمجيء الثاني (57 - 48)' },
        { value: 5, text: 'البنيان (122 - 58)' },
        { value: 6, text: 'الخلاص (139 - 123)' },
        { value: 8, text: 'دليل الترانيم (143 - 140)' },
    ]
};

// Set the max values for each book
const maxValues = {
    '1': 315, // Max for Book 1
    '2': 143  // Max for Book 2
};

// Update the image folder and placeholder when the book selection changes
bookSelect.addEventListener('change', function() {
    const selectedBook = bookSelect.value;
    currentBook = selectedBook === '1' ? 'img1' : 'img2'; // Use 'img1' for Book 1 and 'img2' for Book 2
    updateCategories(selectedBook); // Call to update categories
    updateImage(); // Call to refresh image based on new selection
    updatePlaceholderAndMax(selectedBook); // Update the placeholder and max value
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

// Function to update placeholder and max attributes based on the selected book
function updatePlaceholderAndMax(book) {
    const maxValue = maxValues[book];
    inputElement.placeholder = `1-${maxValue}`; // Update placeholder to reflect valid range
    inputElement.max = maxValue; // Update max value
    inputElement.value = ''; // Clear the input when the book changes to prevent invalid entries
}

// Function to update image based on input and selected book
inputElement.addEventListener('input', function() {
    // Get the entered value and selected book
    const value = parseInt(inputElement.value);
    const selectedBook = bookSelect.value;
    const maxValue = maxValues[selectedBook];

    // If the value is out of range, reset the input value
    if (value < 1 || value > maxValue) {
        inputElement.value = ''; // Clear invalid input
    } else {
        updateImage();
    }
});

function updateImage() {
    const value = parseInt(inputElement.value);
    const selectedBook = bookSelect.value;
    const maxValue = maxValues[selectedBook]; // Get the max value for the selected book

    // Only proceed if the value is within the valid range
    if (value >= 1 && value <= maxValue) {
        // Update the image source based on the entered value and selected book
        const imagePath = currentBook + '/' + value + '.jpg';
        imgElement.src = imagePath;
        imgElement.style.display = 'block'; // Show the image
    } else {
        imgElement.style.display = 'none'; // Hide the image if the value is invalid
    }
}

// Initial call to populate categories and set placeholder/max for Book 1
document.addEventListener('DOMContentLoaded', function() {
    updateCategories('1'); // Set categories for Book 1 as default
    updateImage(); // Display the default image (1.jpg) for Book 1
    updatePlaceholderAndMax('1'); // Set the placeholder and max for Book 1
});
