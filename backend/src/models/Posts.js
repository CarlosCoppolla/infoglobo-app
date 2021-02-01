const mongoose = require("mongoose");

const PostsSchema = mongoose.Schema({
    titulo: String,
    conteudo: String,
    data: String,
});

module.exports = mongoose.model("Post", PostsSchema);