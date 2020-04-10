const request = require('request');

// const fetchMyIp = function(callback) {
//   request('https://api.ipify.org?format=json', (error, response, body) => {
//     if (error) {
//       callback(error, null);
//     }
//     if (response.statusCode !== 200) {
//       const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
//       callback(Error(msg), null);
//     } else {
//       let jsonBody = JSON.parse(body);
//       let ip = jsonBody.ip;
//       callback(null, ip);
//     }
//   });
// };

// const fetchCoordsByIp = function(ip, callback) {
//   request("https://ipvigilante.com/json/" + ip, (error, response, body) => {
//     if (error) {
//       callback(error, null);
//     }
//     if (response.statusCode !== 200) {
//       const msg = `Status Code ${response.statusCode} when fetching coordinates for IP. Response: ${body}`;
//       callback(Error(msg), null);
//     } else {
//       let jsonBody = JSON.parse(body);
//       let latitude = jsonBody.data.latitude;
//       let longitude = jsonBody.data.longitude;
//       let coordinates = {latitude, longitude};
//       callback(null, coordinates);
//     }
//   });
// };

const fetchISSFlyOverTimes = function(objectLatLong, callback) {
  let urlISS = "http://api.open-notify.org/iss-pass.json?lat=" + objectLatLong.latitude + "&lon=" + objectLatLong.longitude;
  request(urlISS , (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    // if (response.status !== 200) {
    //   const msg = `Status Code ${response.statusCode} when fetching coordinates for ISS. Response: ${body}`;
    //   console.log(Error(msg), null)
    //   return;
    // }
    let infoISS = JSON.parse(body);
    let flyOverTimes = infoISS.response;
    callback(null, flyOverTimes);
  });
};

///// QUESTIONS:
///// Why is it thinking that the response.status is not 200?
///// Are we supposed to be taking away the callbacks and re-console.loging, in order to be
///// calling the functions in other functions?

////////////////////////////

let nextISSTimesForMyLocation = function(callback) {
  
}

// module.exports = fetchMyIp;
// module.exports = fetchCoordsByIp;
// module.exports = fetchISSFlyOverTimes;
module.exports = nextISSTimesForMyLocation;