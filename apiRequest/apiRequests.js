const axios = require("axios");

const url = `https://rmx5oedl1b.execute-api.eu-west-2.amazonaws.com/development/birds`;

exports.getAllBirdsByArea = location => {
  return axios
    .get(`${url}${location}`)
    .then(response => {
      return JSON.parse(response.data.body);
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getAllBirds = () => {
  return axios
    .get(`${url}/names`)
    .then(response => {
      return JSON.parse(response.data.body);
    })
    .catch(err => console.log(err));
};

exports.postBird = bird => {
  return axios
    .post(url, bird)
    .then(response => {
      return JSON.parse(response.data.body);
    })
    .catch(err => {
      console.log(err, "<<<<<<<<<<<ERRRROORR");
    });
};

exports.getBirdsByFeatures = features => {
  return axios
    .get(`${url}/features`, { params: features })
    .then(response => JSON.parse(response.data.body))
    .catch(err => console.log(err));
};

// postBird('Robin', 'https://something', '33', { lat: 54.876, lon: -1.45765 });
