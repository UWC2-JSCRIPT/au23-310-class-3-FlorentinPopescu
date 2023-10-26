// 1. Create attack function below.  This will take the following parameters:
// attackingPlayer, defendingPlayer, baseDamage, variableDamage

"use strict";

/*
function attack(attackingPlayer, defendingPlayer, baseDamage=0, variableDamage=0) {
  //  * Computes total damage, reduced health property, return attck as string
  //  * @param {Object} attakingPlayer 
  //  * @param {Object} defendingPlaye
  //  * @param {Integer} baseDamage
  //  * @param {Number} variableDamage - random 
  //  * @return {String}
 
  if ((typeof attackingPlayer === 'object') && (typeof defendingPlayer === 'object') && 
      Number.isInteger(baseDamage)  && Number.isInteger(variableDamage) ) {

    // calculate total damage as baseDamage plus a random integer from 0 to variableDamage
    let totalDamage = baseDamage + Math.floor(Math.random() * (variableDamage + 1));
 
    // reduce the health property of the defendingPlayer by the amount of the calculated damage
    defendingPlayer.health -= totalDamage;

    // Returna string describing the attack, i.e. "Merlin hits James Bond for 4 damage"
    return `${attackingPlayer.name} hits ${defendingPlayer.name} for ${totalDamage} damage`;
  
  } else {
    return "unknown players";
  }
  
} 
*/

// 2. Create player1 and player2 objects below
// Each should have a name property of your choosing, and health property equal to 10

const player1 = {
  name: "Florentin",
  health: 10
 }

const player2 = {
  name: "Gonzo",
  health: 10
}


// 3. Refactor attack function to an arrow function.  Comment out function above.
const attack = (attackingPlayer, defendingPlayer, baseDamage=0, variableDamage=0) => {
  /*
    * Computes total damage, reduced health property, return attck as string
    * @param {Object} attakingPlayer 
    * @param {Object} defendingPlaye
    * @param {Integer} baseDamage
    * @param {Number} variableDamage - random 
    * @return {String}
  */
 
  if ((typeof attackingPlayer === 'object') && (typeof defendingPlayer === 'object') && 
      Number.isInteger(baseDamage)  && Number.isInteger(variableDamage) ) {

    // calculate total damage as baseDamage plus a random integer from 0 to variableDamage
    let totalDamage = baseDamage + Math.floor(Math.random() * (variableDamage + 1));
 
    // reduce the health property of the defendingPlayer by the amount of the calculated damage
    defendingPlayer.health -= totalDamage;

    // Returna string describing the attack, i.e. "Merlin hits James Bond for 4 damage"
    return `${attackingPlayer.name} hits ${defendingPlayer.name} for ${totalDamage} damage`;
  
  } else {
    return "unknown players";
  }
  
} 


// DO NOT MODIFY THE CODE BELOW THIS LINE
// Set attacker and defender.  Reverse roles each iteration

let attackOrder = [player1, player2];

// Everything related to preventInfiniteLoop would not generally be necessary, just adding to
// safeguard students from accidentally creating an infinite loop & crashing browser

let preventInfiniteLoop = 100;
while (player1.health >= 1 && player2.health >= 1 && preventInfiniteLoop > 0) {
  const [attackingPlayer, defendingPlayer] = attackOrder;
  console.log(attack(attackingPlayer, defendingPlayer, 1, 2));
  attackOrder = attackOrder.reverse();

  preventInfiniteLoop--;
}
const eliminatedPlayer = player1.health <= 0 ? player1 : player2;
console.log(`${eliminatedPlayer.name} has been eliminated!`);
