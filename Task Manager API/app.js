const express = require("express")
const app = express()
const tasks = require("./public/Routs/tasks")

//* middleware
app.use(express.json())

//* routes
app.get("/hello", (req, res) => {
  res.send("Hello my name is Yusuf")
})

app.use("/api/v1/tasks", tasks)

const port = 9000

app.listen(port, console.log(`Server is listining ${port}...`))
