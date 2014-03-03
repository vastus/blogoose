module.exports = function Post(mongoose) {
    var schema = mongoose.Schema({
        title: String,
        content: String,
        tags: String,
        created_at: { type: Date, default: Date.now }
    });

    return mongoose.model('Post', schema);
}

