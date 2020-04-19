const express = require("express")
const app = express()
// const router = require('./routes/admin/index')
app.set('secret','aaa')

app.use(require('cors')())
app.use(express.json())

app.use('/uploads',express.static(__dirname + '/uploads'))
app.use('/admin',express.static(__dirname + '/admin'))
app.use('/',express.static(__dirname + '/web'))

require('./plugins/db')(app)
require('./routes/admin/index')(app)
require('./routes/web/index')(app)
// app.use('/admin/api',router)

app.listen(3001, () => {
  console.log("Express running at:\n"+"http://localhost:3001")
})