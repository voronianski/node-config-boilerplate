# node-config-boilerplate

![](http://img.shields.io/github/tag/voronianski/node-config-boilerplate.svg)

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

---

**MIT Licensed**