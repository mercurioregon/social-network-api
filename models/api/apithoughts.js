
const thoughtModel = require("../Thought")

const router = require("express").Router()

router.get("/", async (req,res)=> {
    const thought = await thoughtModel.find(req.body)
    res.json(thought)
});

router.get("/:_id", async (req,res)=> {
    const thought = await thoughtModel.findById(req.params._id)
    res.json(thought)
});

router.post("/:_id", async (req,res)=> {
    const thought = await thoughtModel.create(req.params._id, req.body)
    res.json(thought)
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
    const thought = await thoughtModel.findByIdAndUpdate(req.params._id, req.body)
    res.json(thought)
});

router.delete("/:_id", async (req,res)=> {
    const thought = await thoughtModel.findByIdAndDelete(req.params._id, req.body)
    res.json(thought)
});

router.post("/:thoughtId/reactions", async (req,res)=> {
    const reaction = await thoughtModel.create(req.body)
    res.json(reaction)
});

router.delete("/:thoughtId/reactions", async (req,res)=>{
    const reaction = await thoughtModel.delete(req.params._id. req.body)
    res.json(reaction)
});


// **`/api/thoughts/:thoughtId/reactions`**

// * `POST` to create a reaction stored in a single thought's `reactions` array field

// // * `DELETE` to pull and remove a reaction by the reaction's `reactionId` value




module.exports = router










// * `POST` to create a new thought (don't forget to push the created thought's `_id` to the associated user's `thoughts` array field)

// ```json
// // example data
// {
//   "thoughtText": "Here's a cool thought...",
//   "username": "lernantino",
//   "userId": "5edff358a0fcb779aa7b118b"
// }
// ```

// * `PUT` to update a thought by its `_id`

// * `DELETE` to remove a thought by its `_id`

// ---
// // 
