let boxes = document.querySelectorAll(".box"); // Select all elements with the class "box"
let resetBtn = document.querySelector("#reset-button"); // Select the reset button by its ID
let newgamebtn = document.querySelector("#new-btn"); // New game button
let msgcontainer = document.querySelector(".msg"); // Message container
let msg = document.querySelector("#p"); // Message text

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

// Reset the game state
const resetGame = () => {
    turn0 = true;
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    msgcontainer.classList.add("hide");
    msg.innerText = "";
};

// Disable all boxes after the game ends
const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

// Show the winner
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

// Check if there is a winner
const checkWinner = () => {
    for (let pattern of winpattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
                return;
            }
        }
    }
    // Check for a draw
    let draw = Array.from(boxes).every((box) => box.innerText !== "");
    if (draw) {
        msg.innerText = "It's a Draw!";
        msgcontainer.classList.remove("hide");
        disableBoxes();
    }
};

// Add click event listeners to each box
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O";
        } else {
            box.innerText = "X";
        }
        box.disabled = true;
        turn0 = !turn0;
        checkWinner();
    });
});

// Add event listener to reset button
resetBtn.addEventListener("click", resetGame);

// Add event listener to new game button
newgamebtn.addEventListener("click", resetGame);
