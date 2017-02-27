# get-refile-url

Get Refile URL from key using SHA.

See https://github.com/evanx/refile

### Implementation

See https://github.com/evanx/get-refile-url/blob/master/index.js

```javascript
const crypto = require('crypto');

module.exports = (refileDomain, key) => [
    'https://' + config.refileDomain,
    'key',
    crypto.createHash('sha1').update(key).digest('hex').substring(0, 3),
    key.replace(/\W/g, '-') + '.json'
].join('/')
```

## Used by

- https://github.com/evanx/refile

<hr>

https://twitter.com/@evanxsummers
