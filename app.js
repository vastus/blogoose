/**
 * Vars.
 */
var config = require('./config');
var express = require('express');
var mongoose = require('mongoose');
var app = express();

mongoose.connect(MONGOURI, function (err, res) {
    if (err) console.log(err);
    else console.log('Connected to Mongo.');
});

/**
 * Models.
 */
var Post = require(path.join(MODELDIR, 'post'))(mongoose);

/**
 * Controllers.
 */
var Posts = require(path.join(CTRLRDIR, 'posts_controller'))(Post);

/**
 * Settings.
 */
app.set('view engine', 'jade');

/**
 * Middleware.
 */
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.bodyParser());
app.use(express.methodOverride());
//app.use(app.router);
app.use(express.static(__dirname + '/public'));
//if ('development' == app.get('env')) {
    app.use(express.errorHandler());
//}

/**
 * Routes.
 */
app.get('/(posts)?', Posts.index);
app.get('/posts/new', Posts.neuu);
app.get('/posts/:id', Posts.show);
app.post('/posts', Posts.create);
app.get('/posts/:id/edit', Posts.edit);
app.put('/posts/:id', Posts.update);

/**
 * Listen.
 */
app.listen(process.env.PORT || 3000);
