/**
 * Vars.
 */
var config = require('./config');
var express = require('express');
var mongoose = require('mongoose');
var app = express();

/**
 * Models.
 */
var Post = require(path.join(MODELDIR, 'post'))(mongoose);

/**
 * Settings.
 */
app.set('view engine', 'jade');
mongoose.connect(MONGOURI, function (err, res) {
    if (err) console.log(err);
    else console.log('Connected to MongoDB');
});

/**
 * Middleware.
 */
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.bodyParser());
app.use(express.static(__dirname + '/public'));

/**
 * Routes.
 */
app.get('/(posts)?', function indexPosts(req, res) {
    Post.find(function (err, posts) {
        if (err) res.send(err);
        else res.render('posts/index.jade', { posts: posts });
    });
});

app.get('/posts/new', function newPost(req, res) {
    res.render('posts/new.jade');
});

app.get('/posts/:id', function showPost(req, res) {
    Post.findOne({ _id: req.params.id }, function (err, post) {
        if (err) res.send(err);
        else res.render('posts/show.jade', { post: post });
    });
});

app.post('/posts', function createPost(req, res) {
    var postParams = req.body.post;
    var post = new Post(postParams);
    post.save(function (err, post) {
        if (err) {
            res.render('/posts/new.jade');
        } else {
            res.redirect('/');
        }
    });
});

app.listen(3000);

