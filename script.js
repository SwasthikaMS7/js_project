function scrollToProducts() {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

function addToCart(productName) {
    alert(`${productName} has been added to your cart!`);
}
function showInterior(interiorId) {
    // Hide all interior sections
    document.querySelectorAll('.Interior1').forEach(interior => {
        interior.style.display = 'none';
    });

    // Show the selected interior section
    document.getElementById(interiorId).style.display = 'block';
}

function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}
// Conversion rate: 1 USD to INR (update this rate as per the current exchange rate)
const USD_TO_INR = 74; // Example conversion rate
const TAX_RATE = 0.18; // Example tax rate of 18%

function scrollToProducts() {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

function addToCart(productName) {
    const prices = {
        'Volvo': 40999.99,
        'Benz': 49908.99
    };

    const priceInUSD = prices[productName];
    const priceInINR = priceInUSD * USD_TO_INR;
    const tax = priceInINR * TAX_RATE;
    const total = priceInINR + tax;

    alert(`Product: ${productName}\nPrice: $${priceInUSD.toFixed(2)}\nPrice in INR: ₹${priceInINR.toFixed(2)}\nTax: ₹${tax.toFixed(2)}\nTotal: ₹${total.toFixed(2)}`);
}

function showInterior(interiorId) {
    document.querySelectorAll('.Interior1').forEach(interior => {
        interior.style.display = 'none';
    });
    document.getElementById(interiorId).style.display = 'block';
}

function showInteriorPage(page) {
    window.open(page, '_blank');
}

