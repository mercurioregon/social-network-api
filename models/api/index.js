

const router = require("express").Router()
const userrouter = require("./apiusers")
// const thoughtrouter = require("./apithoughts")
router.use("/users", userrouter )
// router.use("/thoughts", thoughtrouter)
module.exports = router
