const express = require("express")
const app = express()
// const router = require('./routes/admin/index')
app.use(require('cors')())
app.use(express.json())

require('./plugins/db')(app)
require('./routes/admin/index')(app)



// app.use('/admin/api',router)



app.listen(3000, () => {
  console.log("Express running at:\n"+"http://localhost:3000")
})