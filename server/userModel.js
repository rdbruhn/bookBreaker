var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  plans: Array
});

var createHash = function(password){
  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        return hash;
    });
  });
};

userSchema.pre('save', function(user){
var hash = createHash(this.password);
  this.password = hash;
  next();
});

module.exports = mongoose.model('User', UserSchema);