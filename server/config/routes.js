var User = require('./../controllers/users');
var Post = require('./../controllers/posts');

module.exports = function(app) {


	app.post('/user', User.create);

	app.get('/user', User.index);


	app.post('/posts', Post.create);

	app.get('/posts', Post.index);

	app.delete('/posts/:id', Post.delete);

	app.get('/posts/:id', Post.show);


	app.put('/posts/update/:id', Post.update);

}
