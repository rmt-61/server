const express = require('express')

const homeRouter = require('./routers/home_router')
const authRouter = require('./routers/auth_router')

const app = express()
const port = 3000

app.use(express.json())

app.use(homeRouter)
app.use(authRouter)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})