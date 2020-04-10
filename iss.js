const request = require('request');

let urlIP = 'https://api.ipify.org?format=json';

const fetchMyIp = function(callback) {
  request(urlIP, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    } else {
      let jsonBody = JSON.parse(body);
      let ip = jsonBody.ip;
      callback(null, ip);
    }
  });
};

module.exports = fetchMyIp;