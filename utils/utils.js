const crypto = require('crypto');

exports.findDistance = (point1, point2) => {
  const { lat1, lon1 } = point1;
  const { lat2, lon2 } = point2;

  const R = 6371e3; // metres
  const φ1 = (lat1 * Math.PI) / 180; // φ, λ in radians
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const d = R * c; // in metres

  return d / 1000;
};

exports.fetchBirdsByFeatures = (features, birds) => {
  if (!features) return [];

  return birds.filter((bird) => {
    let isMatch = true;
    for (key in features) {
      if (bird.features[key] !== features[key]) {
        isMatch = false;
      }
    }
    return isMatch;
  });
};

exports.generateUUID = () => crypto.randomBytes(16).toString('hex');
