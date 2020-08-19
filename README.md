# WHITELIST
PlugIn to configure [CORS Cross-Origin Resource Sharing](https://developer.mozilla.org/it/docs/Web/HTTP/CORS)

## Installation

```
    npm install --save whitelist

    yarn add whitelist
```

## Use

To enable a resource to a specific request from an HTTP source, an array of addresses must be implemented.

```
    var whitelist = require('whitelist');

    var origins = ['http://localhost', 'http://mysite.com'];

    router.post('/', whitelist(origins), function(req, res, next) {

        var contract = req.app.locals.eos.smartContracts.coronavirus;
        
        block.run(contract, 'send', req.body, (err, response) => {
            if (err) {
                console.error(response);
                res.status(500).json(response);
            } else {
                console.table(response);
                res.status(200).json(response);
            }
        });
    
    });

```

To enable any HTTP client 

```
    router.post('/', whitelist(), function(req, res, next) {

        ....

    });

```