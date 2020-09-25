const express = require('express');

const app = express();

const router = require('./routes');

const PORT = 3001;

app.use(express.json());
app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server Listening at http://localhost:${PORT}`);
});