const nextISSTimesForMyLocation = require('./iss');

// fetchMyIp((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   } else {
//     console.log('It worked! Returned IP:' , ip);
//   }
// });

// fetchCoordsByIp('32.212.164.168', (error, coordsIP) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   } else {
//     console.log('It worked! Returned IP:' , coordsIP);
//   }
// });

// let exampleCoords = { latitude: '41.27940', longitude: '-73.03290' };
// fetchISSFlyOverTimes(exampleCoords, (error, coords) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   } else {
//     console.log('It worked! Returned ISS Spots:' , coords);
//   }
// });

let printPassTimes = function(flyOverTimes) {
  for (const pass of flyOverTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

// nextISSTimesForMyLocation((error, flyOverTimes) => {
//   if (error) {
//     return console.log("It didn't work!", error);
//   } else {
//     printPassTimes(flyOverTimes);
//   }
// });

module.exports = { printPassTimes };