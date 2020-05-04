const axios = require("axios");

exports.getAllBirdsByArea = url => {
  return axios
    .get(url)
    .then(response => {
      return JSON.parse(response.data.body);
    })
    .catch(err => {
      console.log(err);
    });
};
