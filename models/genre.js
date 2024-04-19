const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
    name: { type: String, required: true, maxLength: 300  }
});


GenreSchema.virtual("url").get(function () {
  return `/catalog/genre/${this._id}`;
});

// Export model
module.exports = mongoose.model("Genre", GenreSchema);