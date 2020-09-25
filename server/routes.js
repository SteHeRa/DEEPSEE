const express = require('express');
const router = express.Router();

const userCtrl = require('./controllers/user');
const logCtrl = require('./controllers/log');
const photoCtrl = require('./controllers/photo');

router.post('/user', userCtrl.create);

router.get('/logs', logCtrl.getLogs);
router.post('/logs', logCtrl.postLog);

// router.get('/images', photoCtrl.getImages);
// router.post('/images', photoCtrl.postImages);


module.exports = router;