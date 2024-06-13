const mongoose = require("mongoose");
const ReactionSchema = require("./Reaction");


const ThoughtSchema = new mongoose.Schema({
   thoughtText: {type: String, required: true, minLength: 1, maxLength: 280},
    createdAt:{ type: Date, default: Date.now },
    username: {type: String, required: true},
    reactions: [ReactionSchema]
});

ThoughtSchema.virtual("reactionCount").get(()=>{
    return this.reactions.length
});
const thoughtModel = mongoose.model("Thought", ThoughtSchema)


// Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.

// * `thoughtText`
//   * String
//   * Required
//   * Must be between 1 and 280 characters

// * `createdAt`
//   * Date
//   * Set default value to the current timestamp
//   * Use a getter method to format the timestamp on query

// * `username` (The user that created this thought)
//   * String
//   * Required

// * `reactions` (These are like replies)
//   * Array of nested documents created with the `reactionSchema`

// **Schema Settings**:

module.exports = thoughtModel;
