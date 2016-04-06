var User = require('./userModel.js');
var Promise = require('bluebird');
Promise.promisifyAll(mongoose);

module.exports ={
  // comparePasswords: function(user){
  //   User.find({username:user.username})
  //     .then(function(savedUser){
  //       return bcrypt.compare(user.password, savedUser.password, function(err, res) {
          
  //       });
  //   });
  },
  signIn: function(req, res, next){
    var username = req.body.username;
    // var password = req.body.password;
    // User.findOne({username: username})
    //   .then(function (user) {
    //     if (!user) {
    //       next(new Error('User does not exist'));
    //     } else {
    //       return user.comparePasswords(password)
    //         .then(function (foundUser) {
    //           if (foundUser) {
    //             var token = jwt.encode(user, 'secret');
    //             res.json({token: token});
    //           } else {
    //             return next(new Error('No user'));
    //           }
    //         });
    //     }
    //   })
    //   .fail(function (error) {
    //     next(error);
    //   });
  },
  signUp: function(req, res, next){

  }
};