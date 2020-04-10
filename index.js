// const fetchMyIp = require('./iss');
// const fetchCoordsByIp = require('./iss');
// const fetchISSFlyOverTimes = require('./iss');
const nextISSTimesForMyLocation = require('./iss');

// fetchMyIp((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   } else {
//     console.log('It worked! Returned IP:' , ip);
//   }
// });

// fetchCoordsByIp('32.212.164.168', (error, data) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   } else {
//     console.log('It worked! Returned IP:' , data);
//   }
// });

// let exampleCoords = { latitude: '41.27940', longitude: '-73.03290' };
// fetchISSFlyOverTimes(exampleCoords, (error, data) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   } else {
//     console.log('It worked! Returned ISS Spots:' , data);
//   }
// });

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  } else {
    console.log(passTimes);
  }
});


///// Questions: 
///// WHy is there a return before the console.log in the nextISSTimesForMyLocation called function?