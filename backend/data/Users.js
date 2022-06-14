import bcrypt from 'bcryptjs'

const users = [
    {
        name:'User',
        email:'user@example.com',
        password: bcrypt.hashSync('12345', 10),
    }
]

export default users