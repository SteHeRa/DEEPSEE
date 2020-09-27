const express = require('express');
const router = express.Router();
const multerUploads = require('./middleware/multer');
const photoUploads = require('./middleware/photos');

const userCtrl = require('./controllers/user');
const logCtrl = require('./controllers/log');

router.post('/user', userCtrl.create);

router.get('/logs', logCtrl.getLogs);
router.post('/logs', multerUploads, photoUploads, logCtrl.postLog);

// router.get('/photos', photoCtrl.getImages);

module.exports = router;