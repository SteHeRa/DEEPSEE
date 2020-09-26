const Photo  = require('../models/photosSchema');

const dataUri = require('../middleware/dataUri');
const { uploader } = require('cloudinary');

function postImages (req, res) {
  console.log('req', req);
  console.log('req.file', req.file);
  console.log('req.body', req.body);
  if(req.file) {
    try {
      const file = dataUri(req).content;

      return uploader.upload(file).then((res) => {
        const image = res.url;
        console.log(image);
        res.status(200)
        res.send(image);
      })
    }catch (err) {
      res.status(500)
      res.send({err, message: 'Server failed to upload your image'});
    }
  }
  //THEN DO WRITE TO DATABSE
  //RETURN WHAT IS WRITTEN TO THE DATABASE
}

module.exports = {
  postImages
}