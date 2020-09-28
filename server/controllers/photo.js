const Photo  = require('../models/photosSchema');

async function getPhotos (req, res) {
  try{
    const photos = await Photo.find({country: `${req.query.country}`, region: `${req.query.region}`, diveSite: `${req.query.diveSite}`});
    const photoUrls = photos.map(photo => photo.URL);
    res.send(photoUrls);
  }catch(err) {
    console.log('---> error retrieving photos from database');
    res.status(500);
    res.send({err, message: 'Could not get photos'});
  }
}

module.exports = {
  getPhotos
}