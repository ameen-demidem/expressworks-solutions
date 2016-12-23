const express = require('express');
const fs = require('fs');

const fileName = process.argv[3] || '';

const app = express();
app.get('/books', (req, res) => {
  fs.readFile(fileName, (err, data) => {
    if (err) {
      console.error('An error happend while trying to open the file!');
      console.error(err);
      res.writeHead(500);
      res.end();
    } else {
      res.send(JSON.parse(data.toString()));
    }
  });
});

app.listen(Number(process.argv[2]) || 8000);
