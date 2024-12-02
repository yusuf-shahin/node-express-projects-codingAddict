const express = require("express")
const router = express.Router()

//? we store in our router

const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../Controller/tasks")

//* in router we set route and pass method
router.route("/").get(getAllTasks).post(createTask)
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router
