'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// Test

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Node.js Sample!\n');
});

var port = process.env.PORT||PORT;
app.listen(port);
console.log(`Running on http://${HOST}:${PORT}`);
