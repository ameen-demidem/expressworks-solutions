const express = require('express');

const templatesPath = process.argv[3] || '.';

const app = express();
app.set('views', templatesPath);
app.set('view engine', 'jade');

app.get('/home', (req, res) => {
  res.render('index', { date: new Date().toDateString() });
});

app.listen(Number(process.argv[2]) || 8000);

