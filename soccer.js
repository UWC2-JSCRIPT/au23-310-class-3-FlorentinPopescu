
const RESULT_VALUES = {
  w: 3,
  d: 1,
  l: 0
}

/**
 * Takes a single result string and (one of 'w', 'l', or 'd') 
 * and returns the point value
 * 
 * @param {string} result 
 * @returns {number} point value
 */
const getPointsFromResult = function getPointsFromResult(result) {
  return RESULT_VALUES[result];
}


// Create getTotalPoints function which accepts a string of results
// including wins, draws, and losses i.e. 'wwdlw'
// Returns total number of points won

const getTotalPoints = function getTotalPoints(results) {
   /*
    * computes total points given a string using corresponding values of RESULT_VALUES const 
    * @param {Integer} baseDamage
    * @return {Integer} total points 
  */
  let arr = results.split('');

  let totalPoints = 0;

  arr.forEach(character => {
    totalPoints += getPointsFromResult(character);
  });

  return totalPoints;
}


// Check getTotalPoints
console.log(getTotalPoints('wwdl')); // should equal 7

// create orderTeams function that accepts as many team objects as desired, 
// each argument is a team object in the format { name, results }
// i.e. {name: 'Sounders', results: 'wwlwdd'}
// Logs each entry to the console as "Team name: points"

const orderTeams = (...obj) => {
   /*
    * converts string values to integer for each element of an array of objects 
    * @param {Array} array of objects
    * @return {String} console log 
  */
  
  obj.forEach(item => {
    console.log(item.name + ":", getTotalPoints(item.results));
  });
}

// Check orderTeams

orderTeams(
  { name: 'Sounders', results: 'wwdl' },
  { name: 'Galaxy', results: 'wlld' }
);

// should log the following to the console:
// Sounders: 7
// Galaxy: 4
