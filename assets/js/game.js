var playerName = window.prompt("Hello! What is the name of your robot?");
// note the lack of quoatation marks around playerName
console.log(playerName);

// this creates a function named "fight"
function fight() {
    window.alert("The fight has begun!");
}

fight();

console.log("This logs a string, good for leaving yourself a message");
// this will do math and log 20
console.log(10 + 10);
// what is this?
console.log("Our robot's name is " + playerName);