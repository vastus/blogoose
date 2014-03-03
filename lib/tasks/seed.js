var config = require('../../config.js');
var mongoose = require('mongoose');
var Post = require(path.join(MODELDIR, 'post'))(mongoose);
var posts = require(path.join(DBDIR, 'seeds'));

mongoose.connect(MONGOURI, function (err, res) {
    if (err) {
        console.log(err);
        return;
    }
    Post.remove({}, function (err) {
        if (err) {
            console.log(err);
            return;
        }
        Post.create(posts, function (err) {
            if (err) {
                console.log(err);
                return;
            }
            mongoose.disconnect();
        });
    });
});

