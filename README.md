# WHITELIST
PlugIn to configure [CORS Cross-Origin Resource Sharing](https://developer.mozilla.org/it/docs/Web/HTTP/CORS)

## Installation

```
    npm install --save whitelistcors

    yarn add whitelistcors
```

## Use

To enable a resource to a specific request from an HTTP source, an array of addresses must be implemented.

```
    var whitelist = require('whitelistcors');

    var origins = ['http://localhost', 'http://mysite.com'];

    router.post('/', whitelist(origins), function(req, res, next) {

        .....
    
    });

```
