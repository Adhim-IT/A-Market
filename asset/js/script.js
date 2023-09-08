//dark and light mode

// search
document.addEventListener('DOMContentLoaded', function () {
  var searchForm = document.querySelector('form'); // Select the form element
  var searchBox = document.getElementById('search-box'); // Select the search input

  searchForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    var searchTerm = searchBox.value.toLowerCase(); // Get the search term and convert it to lowercase for case-insensitive search

    // Iterate through the product elements to find a match
    var productElements = document.querySelectorAll('.product');
    for (var i = 0; i < productElements.length; i++) {
      var product = productElements[i];
      var productTitle = product.querySelector('.product-title').textContent.toLowerCase();

      // Check if the search term is found in the product title
      if (productTitle.includes(searchTerm)) {
        product.style.display = 'block'; // Show the matching product
      } else {
        product.style.display = 'none'; // Hide non-matching products
      }
    }
  });
});

// Navbar
