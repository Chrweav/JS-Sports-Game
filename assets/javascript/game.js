console.log("hello")

let resetButton = document.querySelector("#reset-button");
let shoot1 = document.querySelector("#teamone-shoot-button")
let shoot2 = document.querySelector("#teamtwo-shoot-button")
let taken1 = document.querySelector("#teamone-numshots")
let taken2 = document.querySelector("#teamtwo-numshots")
let goal1 = document.querySelector("#teamone-numgoals")
let goal2 = document.querySelector("#teamtwo-numgoals")
let reset = document.querySelector("#num-resets")
console.log(shoot1)
console.log(shoot2)
console.log(resetButton)

shoot1.addEventListener("click", function () {
    console.log("shoot1 button clicked");
    let newtaken1Value = Number(taken1.innerHTML) + 1;
    taken1.innerHTML = newtaken1Value;

    if (Math.random()  < .75) {
        console.log("hi");
        let newgoal1Value = Number(goal1.innerHTML) +1;
        goal1.innerHTML = newgoal1Value;
        }
})

shoot2.addEventListener("click", function () {
    console.log("shoot2 button clicked");
    let newtaken2Value = Number(taken2.innerHTML) + 1;
    taken2.innerHTML = newtaken2Value;

    if (Math.random()  < .75) {
        console.log("hi");
        let newgoal2Value = Number(goal2.innerHTML) +1;
        goal2.innerHTML = newgoal2Value;
        }
})

resetButton.addEventListener("click", function() {
    console.log("resetButton button clicked");
    let newnumresetsValue = Number(reset.innerHTML) +1;
    reset.innerHTML = newnumresetsValue;

    taken1.innerHTML = 0
    taken2.innerHTML = 0
    goal1.innerHTML = 0
    goal2.innerHTML = 0
})