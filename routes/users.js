const router = require('express').Router();
const jwt = require('jsonwebtoken');

const User = require('../database/util/models/user');

router.post('/signup', (req, res, next) => {
 let user = new User();
 user.name = req.body.name;
 user.email = req.body.email;
 user.password = req.body.password;
 user.picture = user.gravatar();
 
 User.findOne({ email: req.body.email }, (err, existingUser) => {
  if (existingUser) {
    res.json({
      success: false,
      message: 'La cuenta con ese correo electrónico ya existe'
    });
  } else {
    user.save();
    var token = jwt.sign({
      user: user
    }, process.env.JWT_SECRET_KEY, {
      expiresIn: '7d'
    });
    res.json({
      success: true,
      message: 'Disfruta tu token',
      token: token
    });
  }
 });
});

router.post('/login', (req, res, next) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) throw err;
    if (!user) {
      res.json({
        success: false,
        message: 'Autentificación fallida, usuario no encontrado'
      });
    } else if (user) {
      var validPassword = user.comparePassword(req.body.password);
      if (!validPassword) {
        res.json({
          success: false,
          message: 'Autentificación fallida. Contraseña incorrecta'
        });
      } else {
        var token = jwt.sign({
          user: user
        },process.env.JWT_SECRET_KEY, {
          expiresIn: '7d'
        });
        res.json({
          success: true,
          message: "Disfruta tu token",
          token: token
        });
      }
    }
  });
});

module.exports = router;