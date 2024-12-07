    const cartContainer = document.getElementById("cart-container");
    const subtotalElem = document.getElementById("subtotal");
    const taxElem = document.getElementById("tax");
    const totalElem = document.getElementById("total");

    const TAX_RATE = 0.07;

    function updateTotals() {
        let subtotal = 0;


        document.querySelectorAll(".cart-item").forEach((item) => {
            const price = parseFloat(item.dataset.price);
            const quantity = parseInt(item.querySelector(".quantity-input").value, 10);
            subtotal += price * quantity;
        });


        const tax = subtotal * TAX_RATE;
        const total = subtotal + tax;

        subtotalElem.textContent = subtotal.toFixed(2);
        taxElem.textContent = tax.toFixed(2);
        totalElem.textContent = total.toFixed(2);
    }


    cartContainer.addEventListener("input", (event) => {
        if (event.target.classList.contains("quantity-input")) {
            updateTotals();
        }
    });

    updateTotals();