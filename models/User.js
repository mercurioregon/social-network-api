// **User**:

// * `username`
//   * String
//   * Unique
//   * Required
//   * Trimmed

const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username: {type: String, unique: true,  required: true, trim: true},
    email:{type: String, required: true, unique: true, match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/},
    thoughts: [{type: mongoose.Schema.Types.ObjectId, ref:"Thought" }],
    friends: [{type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

// Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.
UserSchema.virtual("friendCount").get(()=>{
    return this.friends.length
});

const usermodel = mongoose.model("User", UserSchema)

module.exports = usermodel;