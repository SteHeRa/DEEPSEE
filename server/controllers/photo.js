const Photo = require("../models/photosSchema");

async function getPhotos(req, res) {
  try {
    const photos = await Photo.find({
      country: `${req.query.country}`,
      region: `${req.query.region}`,
      diveSite: `${req.query.diveSite}`,
    });
    res.send(photos);
  } catch (err) {
    console.log("---> error retrieving photos from database");
    res.status(500);
    res.send({ err, message: "Could not get photos" });
  }
}

module.exports = {
  getPhotos,
};
