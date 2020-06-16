require('dotenv').load()

import * as express from 'express'
import * as cors from 'cors'
import * as bodyParser from 'body-parser'
import { userRouter } from './routers/user.router'
import { postRouter } from './routers/post.router'
import { validateToken } from './middlewares/token-validate'

const config = require('./config/development')

const app = express()
const port = config.serverPort || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use('/', userRouter)
app.use('/', postRouter)

app.use(validateToken())


app.listen(port, () => {
    console.log(`app is starting: port ${port}`)
})
