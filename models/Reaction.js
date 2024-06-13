// * `reactionId`
const mongoose = require("mongoose");
// const Reaction = require("./Reaction");

const ReactionSchema = new mongoose.Schema({
    reactionBody: {type: String, minLength: 1, maxLength: 280},
    username: {type: String, required: true},
    createdAt: {type: Date, default: Date.now }
});


// **Schema Settings**:

// This will not be a model, but rather will be used as the `reaction` field's subdocument schema in the `Thought` model.

module.exports = ReactionSchema