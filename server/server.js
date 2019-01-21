require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const routes = require('../routes');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('smoke test');
});

app.listen(PORT, () => {
  console.log('server listening to', PORT);
});
