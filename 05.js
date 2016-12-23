const express = require('express');
const stylus = require('stylus');

const public = process.argv[3] || '.';

const app = express();
app.use(express.static(public));
app.use(stylus.middleware(public));
app.listen(Number(process.argv[2]) || 8000);

