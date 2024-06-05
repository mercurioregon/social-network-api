
const Thought = new mongoose.Schema({
   thoughtText: {String, required: true, Must be between 1 and 280 characters},
    createdAt:{ type: Date, default: Date.now },
    username: {String, required: true},
    reactions: [Reactions]
});

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


