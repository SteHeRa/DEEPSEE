const User = require('../models/userSchema');

async function getLogs (req, res) {
  const email = req.body.email;
  try{
    const user = await User.findOne({email: email});
    if (!user) {
      console.log('no such user!');
      res.status(404);
      res.send({error: '404', message: 'user not found'});
      return res;
    }
    res.status(200);
    res.send(user.logs);
    return user.logs;
  } catch (err) {
    res.status(500);
    res.send({err, message: 'Could not get logs'});
  }
}

async function postLog (req, res) {
  const { email, log } = req.body;
  try{
    const user = await User.findOne({email: email});
    if (!user) {
      console.log('no such user!');
      res.status(404);
      res.send({error: '404', message: 'user not found'});
      return res;
    }
  user.logs = [...user.logs, log];
  const updatedUser = await user.save();
  res.status(200);
  res.send(updatedUser);
  } catch (err) {
    console.log('---> error posting new log', err.stack)
    res.status(500);
    res.send({error: '500', message: 'Could not post log'});
  }
}

module.exports = {
  getLogs,
  postLog
}