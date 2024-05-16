/** Represent an individual product for sale */
class Product {
    /** The name of the product */
    title: string;
    /** The retail price of the product */
    price: number;

    constructor(title: string, price: number) {
        this.title = title;
        this.price = price;

    }
}

window.onload = function () {
    // Declare a variable to hold  the submit button element
    let submitButton: HTMLButtonElement = document.querySelector('button[type=submit]');

    // Add a click event listener to the submit button
    submitButton.addEventListener('click', (event: Event) => {
        // prevent the default form submission action
        event.preventDefault();

        // Log  amessage to the console
        console.log('Submit Button clicked');
    });
}