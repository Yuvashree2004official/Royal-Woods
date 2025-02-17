document.addEventListener("DOMContentLoaded", function () {
    let cartCount = 0;
    const cartCounter = document.createElement("div");
    cartCounter.id = "cart-counter";
    cartCounter.textContent = `Cart: ${cartCount}`;
    document.body.appendChild(cartCounter);

    const buttons = document.querySelectorAll(".card button");
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            cartCount++;
            cartCounter.textContent = `Cart: ${cartCount}`;
            alert("Item added to cart!");
        });
    });

    // Toggle Product Details
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("click", function () {
            const details = this.querySelector("p");
            if (details.style.display === "none" || details.style.display === "") {
                details.style.display = "block";
            } else {
                details.style.display = "none";
            }
        });
    });

    // Dark Mode Toggle
    const darkModeToggle = document.createElement("button");
    darkModeToggle.textContent = "Toggle Dark Mode";
    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // Search Functionality
    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "Search products...";
    document.body.appendChild(searchInput);

    searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase();
        cards.forEach(card => {
            const title = card.querySelector("h3").textContent.toLowerCase();
            if (title.includes(query)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });

    const voiceSearchButton = document.createElement("button");
    voiceSearchButton.textContent = "🎙 Voice Search";
    document.body.appendChild(voiceSearchButton);

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.continuous = false;
    recognition.lang = "en-US";

    voiceSearchButton.addEventListener("click", function () {
        recognition.start();
    });

    recognition.onresult = function (event) {
        const voiceQuery = event.results[0][0].transcript.toLowerCase();
        searchInput.value = voiceQuery;
        searchInput.dispatchEvent(new Event("input"));
    };



    // Scroll to Top Button
    const scrollToTop = document.createElement("button");
    scrollToTop.textContent = "Scroll to Top";
    scrollToTop.style.position = "fixed";
    scrollToTop.style.bottom = "20px";
    scrollToTop.style.right = "20px";
    scrollToTop.style.display = "none";
    document.body.appendChild(scrollToTop);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollToTop.style.display = "block";
        } else {
            scrollToTop.style.display = "none";
        }
    });

    scrollToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Rating System
    cards.forEach(card => {
        const ratingContainer = document.createElement("div");
        ratingContainer.classList.add("rating");
        const stars = [1, 2, 3, 4, 5];
        stars.forEach(star => {
            const starElement = document.createElement("span");
            starElement.textContent = "☆";
            starElement.dataset.rating = star;
            ratingContainer.appendChild(starElement);
        });

        card.appendChild(ratingContainer);

        ratingContainer.addEventListener("click", function (e) {
            if (e.target.tagName === "SPAN") {
                const rating = parseInt(e.target.dataset.rating);
                alert(`You rated this product ${rating} stars`);
                const allStars = ratingContainer.querySelectorAll("span");
                allStars.forEach(star => {
                    if (parseInt(star.dataset.rating) <= rating) {
                        star.classList.add("filled");
                    } else {
                        star.classList.remove("filled");
                    }
                });
            }
        });
    });
    document.addEventListener("DOMContentLoaded", function () {
        const cards = document.querySelectorAll(".card");
    
        // Create a modal for checkout
        const modal = document.createElement("div");
        modal.id = "checkout-modal";
        modal.style.display = "none";
        modal.innerHTML = `
            <div class="modal-content">
                <h2>Checkout</h2>
                <p id="modal-product-name"></p>
                <button id="confirm-buy">Confirm Purchase</button>
                <button id="cancel-buy">Cancel</button>
            </div>
        `;
        document.body.appendChild(modal);
    
        // Buy Now Button Functionality
        cards.forEach(card => {
            const buyNowButton = document.createElement("button");
            buyNowButton.textContent = "Buy Now";
            buyNowButton.classList.add("buy-now");
    
            buyNowButton.addEventListener("click", function () {
                const productTitle = card.querySelector("h3").textContent;
                document.getElementById("modal-product-name").textContent = `Confirm purchase for: ${productTitle}`;
                modal.style.display = "block";
    
                // Confirm purchase
                document.getElementById("confirm-buy").onclick = function () {
                    alert(`Thank you for purchasing ${productTitle}!`);
                    modal.style.display = "none";
                };
    
                // Cancel purchase
                document.getElementById("cancel-buy").onclick = function () {
                    modal.style.display = "none";
                };
            });
    
            card.appendChild(buyNowButton);
        });
    
        // Close modal when clicking outside
        window.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
    
    

  
    
});
