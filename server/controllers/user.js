const User = require('../models/userSchema');

async function create (req, res) {
  const { firstName, lastName, email } = req.body;
  const user = await User.findOne({ email: email });
  if (user) {
    res.status(409);
    res.send({error: '409', message: 'User already exists'});
    return res;
  }
  const newUser = new User({
    email: email,
    firstName: firstName,
    lastName: lastName,
    logs: []
  });
  try {
    const user = await newUser.save();
    res.status(201)
    res.send(user);
  } catch (err) {
    console.log('---> error creating new user', e.stack);
    res.status(500);
    res.send({error, message: 'Could not create user'});
  }
};

module.exports = {
  create
};