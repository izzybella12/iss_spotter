const request = require('request-promise-native');

const fetchMyIp = function() {
  return request("https://api.ipify.org?format=json");
};

const fetchCoordsByIp = function(body) {
    let ip = JSON.parse(body).ip;
  return request("https://ipvigilante.com/json/" + ip);
};

const fetchISSFlyOverTimes = function(body) {
    let { latitude, longitude } = JSON.parse(body).data;
    let url = `http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`
    return request(url);
}

const nextISSTimesForMyLocation = function() {
  return fetchMyIp() 
  .then(fetchCoordsByIp)
  .then(fetchISSFlyOverTimes)
  .then((body) => {
    const {response} = JSON.parse(body);
    return response;
  });
}

module.exports = {nextISSTimesForMyLocation};
