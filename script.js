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
        const userStatus = document.createElement("div");
        userStatus.id = "user-status";
        document.body.appendChild(userStatus);
    
        const isLoggedIn = false; // Simulate user login state
    
        if (isLoggedIn) {
            userStatus.innerHTML = `
                <button id="logout">Logout</button>
            `;
            document.getElementById("logout").addEventListener("click", function () {
                alert("Logged out");
                userStatus.innerHTML = `
                    <button id="login">Login</button>
                `;
            });
        } else {
            userStatus.innerHTML = `
                <button id="login">Login</button>
            `;
            document.getElementById("login").addEventListener("click", function () {
                alert("Logged in");
                userStatus.innerHTML = `
                    <button id="logout">Logout</button>
                `;
            });
        }
    });
    
    
    
}); 





    

    
