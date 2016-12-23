const express = require('express');
const crypto = require('crypto');


const app = express();
app.put('/message/:ID', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(
    crypto
      .createHash('sha1')
      .update(new Date().toDateString() + req.params.ID)
      .digest('hex')
  );
});

app.listen(Number(process.argv[2]) || 8000);

