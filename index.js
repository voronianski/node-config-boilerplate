var util = require('util');

var env = process.env.NODE_ENV || 'development';
var fileName = util.format('/%s.config.js', env);

var config = require(__dirname + fileName);

config.env = env;

populateEachConfig(function (value) {
    if (typeof value !== 'string') {
        return value;
    }
    value = value.replace(/\$\(([^\)]+)\)/g, function (_, key) {
        return replaceTemplateTags(key);
    });
    if (/^\d+$/.test(value)) {
        return parseInt(value, 10);
    }
    if (value === 'false') {
        return false;
    }
    if (value === 'true') {
        return true;
    }

    return value;
});

function populateEachConfig (objCallback) {
    next(config);

    function next (cfg) {
        Object.keys(cfg).forEach(function(key) {
            if (typeof cfg[key] === 'object' && cfg[key]) {
                return next(cfg[key]);
            }
            cfg[key] = objCallback(cfg[key]);
        });
    }
}

function replaceTemplateTags (key) {
    if (!key.length) {
        return config;
    }
    if (!Array.isArray(key)) {
        return replaceTemplateTags(key.split('.'));
    }
    return key.reduce(function (result, key) {
        return result && result[key];
    }, config);
}

module.exports = config;
