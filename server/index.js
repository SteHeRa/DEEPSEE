const express = require('express');

const { json } = require('body-parser');

const cloudinaryConfig = require('./config/cloudinaryConfig');

const app = express();

const router = require('./routes');

const PORT = 3001;

app.use(json());
app.use('/photos', cloudinaryConfig); //TODO only use on post requests
app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server Listening at http://localhost:${PORT}`);
});