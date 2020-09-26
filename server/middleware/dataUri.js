const DatauriParser = require('datauri/parser');
const path = require('path');

const parser = new DatauriParser();

const dataUri = req =>
parser.format(path.extname(req.file.originalname).toString(),
req.file.buffer);

module.exports = dataUri;