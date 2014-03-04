module.exports = function PostsController(Post) {
    function index(req, res) {
    	Post.find(function (err, posts) {
    		if (err) res.send(err);
    		else res.render('posts/index.jade', { posts: posts });
    	});
    }

    function show(req, res) {
    	Post.findOne({ _id: req.params.id }, function (err, post) {
    		if (err) res.send(err);
    		else res.render('posts/show.jade', { post: post });
    	});
    }

    function neuu(req, res) {
    	res.render('posts/new.jade');
    }

    function create(req, res) {
    	var post = new Post(req.body.post);
    	post.save(function (err, post) {
    		if (err) {
    			res.render('/posts/new.jade');
    		} else {
    			res.redirect('/');
    		}
    	});
    }

    function edit(req, res) {
    	Post.findOne({ _id: req.params.id }, function (err, post) {
    		if (err) res.send(err);
    		else res.render('posts/edit.jade', { post: post });
    	});
    }

    function update(req, res) {
    	var id = req.param('id');
    	var postParams = req.body.post;
    	Post.findOne({ _id: id }, function (err, post) {
    		if (err) {
    			res.send(err);
    		} else {
    			for (var key in postParams) {
    				post[key] = postParams[key];
    			}
    			post.save(function (err, post) {
    				if (err) {
    					res.render('posts/edit.jade', { post: post });
    				} else {
    					res.redirect('/');
    				}
    			});
    		}
    	});
    }

    return {
    	index: index,
    	show: show,
    	neuu: neuu,
    	create: create,
    	edit: edit,
    	update: update
    };
};
