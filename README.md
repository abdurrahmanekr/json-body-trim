# JSON Body Trim
Json white space cleaner

## Install

```bash
$ npm i json-body-trim --save
```

## API

```javascript
const jsonBodyTrim = require('json-body-trim');
const app = require('express')();

app.use(jsonBodyTrim());

...
```

# Example

```javascript
const jsonBodyTrim = require('json-body-trim');
const bodyParser = require('body-parser');

const app = require('express')();

app.use(bodyParser.json());
app.use(jsonBodyTrim());

app.post('/', (req, res) => {
    res.send(req.body);
})

app.listen(8080);


// post localhost:8080 this data: {"   test   ": "hello  "}
// response this data: {"test":"hello"}
```