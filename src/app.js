import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet';

const app = express()

import authRoutes from './routes/auth.routes'
import userRoutes from './routes/user.routes'

app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (_,res) => {
    res.json({
        author: 'Luis Romero, senixcode',
        description:"api jwt"
    })
})

app.use("/api/auth", authRoutes )
app.use("/api/user", userRoutes )
export default app
