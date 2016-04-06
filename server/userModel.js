var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  plans: Array
});

var salt = "allTheBooksAreBroken87965";

var createHash = function(password){
  bcrypt.genSalt(5, function(err, salt) {
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