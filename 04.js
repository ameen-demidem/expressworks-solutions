const express = require('express');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.urlencoded({extended: false}));
app.post('/form', (req, res) => {
  if (req.body.str) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(req.body.str.split('').reverse().join('')); 
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Bad request!');
  }
});

app.listen(Number(process.argv[2]) || 8000);

