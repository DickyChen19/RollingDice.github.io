function rollDice() {
    const dice1 = Math.floor((Math.random() * 6) + 1);
    const dice2 = Math.floor((Math.random() * 6) + 1);
    const para = document.createElement("p");
    const para1 = document.createElement("p")
    para.textContent = "You rolled a " + dice1 + " and a " + dice2 + "!";
    para1.textContent = "You got " + (dice1 + dice2);
    document.body.appendChild(para);
    document.body.appendChild(para1);
}

const button = document.querySelector("button");

button.addEventListener("click", function() {
    rollDice();
}.bind(this));