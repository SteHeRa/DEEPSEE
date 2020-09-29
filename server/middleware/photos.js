const Photo  = require('../models/photosSchema');

const dataUri = require('../middleware/dataUri');
const { uploader } = require('cloudinary');

async function postImages (req, res, next) {
  if(req.file) {
    try {
      const file = dataUri(req).content;

      const uploadedPhoto = await uploader.upload(file, {folder: "DEEPSEE"} );
        const photoLink = uploadedPhoto.url;
        const savedImage = await Photo.create({
          URL: photoLink,
          country: req.body.country,
          region: req.body.region,
          diveSite: req.body.diveSite,
          date: req.body.date,
          temp: req.body.temp ? req.body.temp : "",
          visibility: req.body.visibility ? req.body.visibility: ""
        });
        req.body.photos = [savedImage.URL];
        req.body.email = "test";
        next();
    } catch (err) {
      res.status(500)
      res.send({err, message: 'Server failed to upload your image'});
    }
  }
}

module.exports = postImages