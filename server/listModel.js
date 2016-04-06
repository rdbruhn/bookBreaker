var mongoose = require('mongoose');

var ListSchema = new mongoose.Schema({
  book: String,
  dueDate: String,
  plan: Array,
  username: String
});

// ListSchema.pre('save', function(this){
//   next();
// });

module.exports = mongoose.model('User', UserSchema);