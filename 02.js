const express = require('express');

const public = process.argv[3] || '.';

const app = express();
app.use(express.static(public));
app.listen(Number(process.argv[2]) || 8000);

