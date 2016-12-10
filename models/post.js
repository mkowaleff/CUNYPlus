var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// Post Schema
var postSchema = mongoose.Schema({
    title: {
      type: String
    },
    link: {
      type:String
    },
    description: {
      type:String
    }
});

var Post = module.exports = mongoose.model('Post', PostSchema);

module.exports.createPost = function(newPost, callback){
	        newPost.save(callback);
}

module.exports.getPostByTitle = function(title, callback){
	var query = {title: title};
	User.findOne(query, callback);
}

module.exports.getPostById = function(id, callback){
	User.findById(id, callback);
}
}
