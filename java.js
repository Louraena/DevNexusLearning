window.onload = function() {
    // Show the dropdown when the search input is focused or the search icon is clicked
    document.getElementById("search-input").addEventListener("focus", function() {
        document.getElementById("search-dropdown").classList.add("show");
    });

    document.getElementById("search-icon").addEventListener("click", function() {
        document.getElementById("search-dropdown").classList.add("show");
    });

    // Hide the dropdown when the user clicks outside the search box
    document.addEventListener("click", function(event) {
        var searchBox = document.querySelector(".search-box");
        var dropdown = document.getElementById("search-dropdown");
        if (!searchBox.contains(event.target)) {
            dropdown.classList.remove("show");
        }
    });

    // Filter the dropdown items based on input text
    document.getElementById("search-input").addEventListener("input", function() {
        var filter = this.value.toLowerCase(); // Get the search text
        var dropdown = document.getElementById("search-dropdown");
        var items = dropdown.getElementsByTagName("a"); // Get all the links in the dropdown

        // Loop through all the dropdown items and hide/show based on search input
        Array.from(items).forEach(function(item) {
            var text = item.textContent || item.innerText;
            if (text.toLowerCase().indexOf(filter) > -1) {
                item.style.display = ""; // Show the item if it matches the search text
            } else {
                item.style.display = "none"; // Hide the item if it doesn't match
            }
        });
    });
}
