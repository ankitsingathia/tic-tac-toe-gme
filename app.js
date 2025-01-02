let boxes = document.querySelectorAll(".box"); // Select all elements with the class "box"
let resetBtn = document.querySelector("#reset-button"); // Select the reset button by its ID
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg");
let msg = document.querySelector("#p");

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
        if(turn0){
            box.innerText = "O";
            turn0=false;
            
        }
        else {//playerx
            box.innerText = "X"
            turn0 = true;
        }
        box.disabled = true;
        // Add game logic here
        checkwinner();
    });
});

// Add functionality to reset button
resetBtn.addEventListener("click", () => {
    console.log("Game reset");
    // Reset the game logic here
});
const showwinner = (winner) =>{
    pmsg.innerText= 'Congratulations, Winner is ${winner}';
    msg.classList.remove("hide");
}

const checkwinner = () => {
    for (let pattern of winpattern){
        // console.log(pattern[0],pattern[1],pattern[2] );
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText );
        
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        //lets check any element is empty
        if(pos1val !="" && pos2val != "" && pos3val != ""){
            if(pos1val===pos2val && pos2val === pos3val){
                console.log("Winner",pos1val);
                showwinner(pos1val);
            }
        }
    }
}