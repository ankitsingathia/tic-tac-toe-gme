let boxes = document.querySelectorAll(".box"); // Select all elements with the class "box"
let resetBtn = document.querySelector("#reset-button"); // Select the reset button by its ID

// Track the player's turn
let turn0 = true; // True for Player X, False for Player O

const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

// Add event listeners to each box
boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        console.log(`Box ${index} clicked`);
        // Add game logic here
    });
});

// Add functionality to reset button
resetBtn.addEventListener("click", () => {
    console.log("Game reset");
    // Reset the game logic here
});
