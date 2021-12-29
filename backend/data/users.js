import bcrypt from "bcryptjs"
const users =[
    {
        name:'Admin User',
        email:'admin@example.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:'Anasse demnati',
        email:'Anasse@gmail.com',
        password:bcrypt.hashSync('123456',10),
        
    },
    {
        name:'Fathi Mahdi',
        email:'Fathi@gmail.com',
        password:bcrypt.hashSync('123456',10),
       
    },
];
export default users;