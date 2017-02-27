const crypto = require('crypto');

module.exports = (refileDomain, key) => [
    'https://' + config.refileDomain,
    'key',
    crypto.createHash('sha1').update(key).digest('hex').substring(0, 3),
    key.replace(/\W/g, '-') + '.json'
].join('/')
