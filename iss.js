const request = require('request');

const fetchMyIp = function(callback) {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
    } else {
      let jsonBody = JSON.parse(body);
      let ip = jsonBody.ip;
      callback(null, ip);
    }
  });
};

const fetchCoordsByIp = function(ip, callback) {
  request("https://ipvigilante.com/json/" + ip, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates for IP. Response: ${body}`;
      callback(Error(msg), null);
    } else {
      let jsonBody = JSON.parse(body);
      let latitude = jsonBody.data.latitude;
      let longitude = jsonBody.data.longitude;
      let coordinates = {latitude, longitude};
      callback(null, coordinates);
    }
  });
};

const fetchISSFlyOverTimes = function(coordinates, callback) {
  let urlISS = "http://api.open-notify.org/iss-pass.json?lat=" + coordinates.latitude + "&lon=" + coordinates.longitude;
  request(urlISS , (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates for ISS. Response: ${body}`;
      console.log(Error(msg), null);
      return;
    }
    let infoISS = JSON.parse(body);
    let flyOverTimes = infoISS.response;
    callback(null, flyOverTimes);
  });
};

////////////////////////////

let nextISSTimesForMyLocation = function(callback) {
  fetchMyIp((error, ip) => {
    if (error) {
      return callback(error, null);
    }
    fetchCoordsByIp(ip, (error, coordinates) => {
      if (error) {
        return callback(error, null);
      }
      fetchISSFlyOverTimes(coordinates, (error, flyOverTimes) => {
        if (error) {
          return callback(error, null);
        }
        callback(null, flyOverTimes);
      });
    });
  });
};

module.exports = nextISSTimesForMyLocation;