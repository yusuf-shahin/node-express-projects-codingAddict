const express = require("express")
const router = express.Router()

const { getAllTasks } = require("../Controller/tasks")

router.route("/file").get(getAllTasks)

module.exports = router
