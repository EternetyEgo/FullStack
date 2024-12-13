const { default: mongoose } = require("mongoose");

const uploadSchema = new mongoose.Schema({
    file: String,
    contentType: String,
})

const Upload = mongoose.model('Upload' , uploadSchema)
exports.Upload = Upload