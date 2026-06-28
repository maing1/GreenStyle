const contactForm = document.getElementById("contact-form");
// Contact Form Validation

if (contactForm) {
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let isValid = true;
    // Get form values
    const name = document.getElementById("f-name").value.trim();
    const email = document.getElementById("f-email").value.trim();
    const phone = document.getElementById("f-tel").value.trim();
    const message = document.getElementById("f-message").value.trim();
    // Message box
    const output = document.getElementById("js-message");
    // Clear previous message
    output.textContent = "";
    output.className = "";
    // Validation
    if (name === "") {
        isValid = false;
    }

    if (email === "" || !email.includes("@")) {
        isValid = false;
    }

    if (phone === "") {
        isValid = false;
    }

    if (message === "") {
        isValid = false;
    }

    // Display result
    if (isValid) {
        output.textContent =
            "Thank you! Your message has been added successfully. We will contact you soon.";

        output.classList.add("msg-success");
        output.style.display = "block";

        document.getElementById("contact-form").reset();

    } else {
        output.textContent =
            "Please fill in all fields correctly.";

        output.classList.add("msg-error");
        output.style.display = "block";
    }

});
}

// Add to Cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(productName) {
    cart.push(productName);
    localStorage.setItem("cart", JSON.stringify(cart));
    document.getElementById("cart-count").textContent = cart.length;
    alert(productName + " added to cart!");
}

function loadCart() {

    const cartItems = document.getElementById("cart-items");

    if (!cartItems) return;

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cartItems.innerHTML = "";

    cart.forEach(function(item) {

        cartItems.innerHTML +=
            "<li class='list-group-item'>" +
            item +
            "</li>";

    });

}

document.addEventListener("DOMContentLoaded", function () {

    loadCart();

});

function clearCart() {

    localStorage.removeItem("cart");

    loadCart();

}

//Add to wishlist
let wishlist = [];
function addToWishlist(productName) {
    wishlist.push(productName);
    alert(productName + " added to wishlist!");
}
