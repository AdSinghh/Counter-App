// Select the HTML element with the ID 'counter' and store it in the variable 'countValue'
const countValue = document.querySelector("#counter");

// Define an 'increment' function to increase the counter value
let increment = () => {
    // Get the current text content of 'countValue', convert it to an integer, and store it in the variable 'value'
    let value = parseInt(countValue.innerText);
    // Increment the value by 1
    value = value + 1;
    // Update the text content of 'countValue' to reflect the new value
    countValue.innerText = value;
};

// Define a 'decrement' function to decrease the counter value
let decrement = () => {
    // Get the current text content of 'countValue', convert it to an integer, and store it in the variable 'value'
    let value = parseInt(countValue.innerText);
    // Decrement the value by 1
    value = value - 1;
    // Update the text content of 'countValue' to reflect the new value
    countValue.innerText = value;
};
