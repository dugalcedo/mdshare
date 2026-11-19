// ===============================================
//  10 JavaScript Object Challenges: Grove Street Edition
//  Do them in order. Exercises 1-4 and 6 all use the same "cj" object.
//  Run your code after each one!
// ===============================================


// -----------------------------------------------
// Challenge 1: Create an object
// Make an object called cj with these properties:
//   name: "CJ"
//   health: 50
//   money: 100
// Then print his name.
// Hint: cj.name
// -----------------------------------------------

// your code here
const player1 = {
    name: "CJ",
    health: 50,
    money: 100
}
console.log(player1.name)

// Expected output: CJ


// -----------------------------------------------
// Challenge 2: Change properties
// CJ goes to Cluckin' Bell and buys a meal for 10 dollars.
// It gives him 25 health.
// Take 10 away from cj.money and add 25 to cj.health.
// Then print both.
// -----------------------------------------------

// your code here
player1.money -= 10
player1.health += 25

// Expected output:
// 90
// 75


// -----------------------------------------------
// Challenge 3: Add a new property
// CJ got in trouble with the police!
// Add a property called wantedLevel to cj and set it to 0.
// Then add 2 to it, and print it.
// -----------------------------------------------

// your code here


// Expected output: 2


// -----------------------------------------------
// Challenge 4: Objects + if
// If cj.wantedLevel is 3 or more, print "Police are coming!"
// Otherwise print "All clear, CJ."
// -----------------------------------------------

// your code here


// Expected output: All clear, CJ.
// Try changing cj.wantedLevel to 5. What happens?


// -----------------------------------------------
// Challenge 5: Functions + objects
// Finish the function so it returns a sentence about the car, like:
//   "Greenwood is green and goes 140 km/h"
// Hint: car.name + " is " + ...
// -----------------------------------------------
function describeCar(car) {
  // your code here
}

let greenwood = { name: "Greenwood", color: "green", speed: 140 };
let infernus = { name: "Infernus", color: "red", speed: 220 };

console.log(describeCar(greenwood));  // Expected: Greenwood is green and goes 140 km/h
console.log(describeCar(infernus));   // Expected: Infernus is red and goes 220 km/h


// -----------------------------------------------
// Challenge 6: Functions + objects + if
// Finish the function buy(player, price):
//   If the player has enough money, take the price away from
//   player.money and return "Bought!"
//   If not, return "Not enough money!"
// -----------------------------------------------
function buy(player, price) {
  // your code here
}

console.log(buy(cj, 50));   // Expected: Bought!
console.log(cj.money);      // Expected: 40
console.log(buy(cj, 50));   // Expected: Not enough money!


// -----------------------------------------------
// Challenge 7: Array of objects + for loop
// Print the name of every member of the gang.
// Hint: gang[i].name
// -----------------------------------------------
let gang = [
  { name: "Sweet", role: "Leader" },
  { name: "Ryder", role: "Gunner" },
  { name: "Big Smoke", role: "Driver" }
];

// your code here


// Expected output:
// Sweet
// Ryder
// Big Smoke


// -----------------------------------------------
// Challenge 8: Array of objects + for loop + if
// Print the name of every car that is faster than 150.
// -----------------------------------------------
let cars = [
  { name: "Greenwood", speed: 140 },
  { name: "Infernus", speed: 220 },
  { name: "Sanchez", speed: 160 },
  { name: "Admiral", speed: 150 }
];

// your code here


// Expected output:
// Infernus
// Sanchez
// (Admiral is NOT faster than 150. It is exactly 150!)


// -----------------------------------------------
// Challenge 9: Add up values from objects
// CJ finished all these missions. How much money did he earn in total?
// Hint: start with  let total = 0;  then add missions[i].reward each time.
// -----------------------------------------------
let missions = [
  { name: "Tagging Up Turf", reward: 200 },
  { name: "Cleaning the Hood", reward: 250 },
  { name: "Drive-Thru", reward: 300 },
  { name: "OG Loc", reward: 500 }
];

// your code here


// Expected output: 1250


// -----------------------------------------------
// Challenge 10: Find the best mission (BOSS LEVEL)
// Finish the function so it returns the NAME of the mission
// with the biggest reward.
// Hint: start with  let best = list[0];
//       then loop, and if list[i].reward > best.reward, change best.
// -----------------------------------------------
function bestMission(list) {
  // your code here
}

console.log(bestMission(missions));   // Expected: OG Loc


// ===============================================
//  "Ah sh*t, here we go again." Mission passed! Respect +
// ===============================================