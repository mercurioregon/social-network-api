// *`/api/users`**

const usermodel = require("../User")

const router = require("express").Router()

router.get("/", async (req,res)=> {
    const users = await usermodel.find()
    res.json(users)
});

router.get("/:_id", async (req,res)=> {
    console.log(req.params._id)
    const user = await usermodel.findById(req.params._id)
    res.json(user)
});

router.post("/", async (req,res)=> {
    const user = await usermodel.create(req.body)
    res.json(user)
});

// * `POST` a new user:

// ```json
// // example data
// {
//   "username": "lernantino",
//   "email": "lernantino@gmail.com"
// }
// ```
router.put("/:_id", async (req,res)=> {
    const user = await usermodel.findByIdAndUpdate(req.params._id, req.body)
    res.json(user)
});

router.delete("/:_id", async (req,res)=> {
    const user = await usermodel.findByIdAndDelete(req.params._id, req.body)
    res.json(user)
});


module.exports = router


// **BONUS**: Remove a user's associated thoughts when deleted.

// ---

// **`/api/users/:userId/friends/:friendId`**

// * `POST` to add a new friend to a user's friend list

// * `DELETE` to remove a friend from a user's friend list

// ---
