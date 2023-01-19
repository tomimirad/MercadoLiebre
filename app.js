const express = require('express')
const app = express()
const path = require("path")
const port = 3000

  app.use(express.static("public"))

  
  app.get('/', (req, res) => 
    res.sendFile(path.resolve("./views/home.html"))
  )

  app.listen(port, () => 
    console.log(`Example app listening on port http://localhost:${port}`)
)