var _ = require('lodash');
var cors = require('cors');

require('dotenv').config();

var all = true;
var originsList = [];

let isWhiteList = (origin) => {
  return (_.indexOf(originsList, origin) != -1)
};

var config = {
  origin: (origin, callback) => {

    if (all || isWhiteList(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'), false)
    }
  }
};

// return object cors 
let corsOrigin = (origins) => {

    all = (typeof origins == 'undefined' || _.size(origins) == 0);

    if (!all) {
        originsList = [...origins];
    } else {
        originsList.push('*')
    };

    return cors(config);
    
}

module.exports = corsOrigin;