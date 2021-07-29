import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet';
if (process.env.NODE_ENV === 'development') {
  dotenv.config();
}
const app = express()

import authRoutes from './routes/auth.routes'
import userRoutes from './routes/user.routes'
app.set('port', process.env.PORT || 5000)
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
