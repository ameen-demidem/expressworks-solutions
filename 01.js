const express = require('express');

const app = express();
app.get('/home', (req, res) => {
  res.end('Hello World!');
});

app.listen(Number(process.argv[2]) || 8000);
