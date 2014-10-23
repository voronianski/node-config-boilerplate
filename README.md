# node-config-boilerplate

> Scalable node.js application config template.

## Get started

Clone this repo inside of your app folder:

```bash
app-folder:~$ git clone git@github.com:voronianski/node-config-boilerplate.git config
```

Create configs for every of your app environments just putting the env name as prefix of the file name:

```bash
production.config.js
development.config.js
staging.config.js
testing.config.js

etc.
```

Use it inside of your application:

```javascript
var express = require('express');
var config = require('./config');

var app = express();

app.listen(config.http.port);
```

## Template tags

You are able to use tags like `$(config.property.childProperty)` to point to specific properties of config:

```javascript
module.exports = {
    name: 'BLITZKRIEG BOP!',
    http: {
        port: process.env.PORT || 8080,
        url: process.env.URL || 'http://0.0.0.0:$(http.port)'
    }
};
```

## References

This small template is simplified version of the https://github.com/e-conomic/config. It is available as [npm](https://www.npmjs.org/package/cnf) module and you're free to use instead if it's more suitable for your needs. 

_IMHO using config as separate module may lead to some confusion, as well as complicates extending for specific application needs._

---

**MIT Licensed**