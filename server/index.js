const express = require("express");
const cors = require("cors");

const { json } = require("body-parser");

const cloudinaryConfig = require("./config/cloudinaryConfig");

const app = express();

const router = require("./routes");

const PORT = 3000;

app.use(cors());

app.use(json());
app.use("/logs", cloudinaryConfig); //TODO only use on post requests
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server Listening at http://localhost:${PORT}`);
});
