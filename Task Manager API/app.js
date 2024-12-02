const express = require("express")
const app = express()

//* import task from router
const tasks = require("./public/router/tasks")

//* middleware
app.use(express.json())

//* routes
app.get("/hello", (req, res) => {
  res.send("Hello my name is Yusuf")
})

//* set the fixt router path .
app.use("/api/v1/tasks", tasks)

const port = 9000

app.listen(port, console.log(`Server is listining ${port}...`))
