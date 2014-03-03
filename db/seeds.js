module.exports = (function () {
    return [
        { title: "Lorem ipsum dolor",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.",
          tags: "lorem, ipsum" }
    ];
})();

/*
mongoose.connect(config.MONGOURI, function (err, res) {
    console.log('in connect');
    if (err) {
        console.log('Error connecting to MongoDB');
        console.log('Using host URI: ' + config.MONGOURI);
        console.log(err);
    }

    Post.remove({}, function (err) {
        console.log('in remove');
        if (err) console.log(err)
    });
});

Post.create(posts, function (err) { // (err, post[0], post[1], ..., post[n])
    console.log('in create');
    if (err) {
        console.log('Error creating posts:');
        console.log(err);
        return;
    }

    mongoose.disconnect(function () {
        console.log('disconnected');
    });
});
*/

