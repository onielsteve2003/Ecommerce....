import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/Db.js'
import ImportData from './DataImport.js'
import productRoute from './routes/ProductRoutes.js'
import { notFound, errorHandler } from './middleware/Errors.js'
import userRouter from './routes/UserRoutes.js'
import orderRouter from './routes/orderRoutes.js'

dotenv.config()
connectDB` `
const app = express()
app.use(express.json())

// API
app.use('/api/import', ImportData)
app.use('/api/products', productRoute)
app.use('/api/users', userRouter)
app.use('/api/orders', orderRouter)
app.use('/api/config/paypal', (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID)
})

// ERROR HANDLER
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
})