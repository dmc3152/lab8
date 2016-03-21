var mongoose = require('mongoose');
var CommentSchema = new mongoose.Schema({
  title: String,
  upvotes: {type: Number, default: 0},
});
CommentSchema.methods.upvote = function(cb) {
  this.upvotes += 1;
  this.save(cb);
};
CommentSchema.statics.remove = function(cb) {
  this.remove(); 
};
mongoose.model('Comment', CommentSchema);
