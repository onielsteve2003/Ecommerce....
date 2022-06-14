import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/UserModel.js'

// const protect = asyncHandler(
//     async(req, res, next) => {
//         const authHeader = req.headers['authorization']
//         const token = authHeader && authHeader.split(' ')[1]
//         if(token == null) return res.sendStatus(401)

//     // Verify Token
//     jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//         if(err) return res.sendStatus(403)
//         req.user = user
//         next()
//     })
//     }
// )

// const protect = asyncHandler(
//     async(req, res, next) => {
//         const authHeader = req.headers['authorization']
//         const token = authHeader && authHeader.split(' ')[1]
//     if (token) {
//         return jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
//             if (err) {
//                 return res.json({
//                     success: false,
//                     message: "Failed to authenticate token.",
//                 });
//             }
//             req.user = decoded;
//             return next();
//         });
//     }
//     return res.unauthorized();
//     }
// )

const protect = asyncHandler(async(req, res, next) => {
    let token
    if(
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decoded.id).select('-password')
            next()
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('Not authorized, no token')
        }
    }
})

export default protect