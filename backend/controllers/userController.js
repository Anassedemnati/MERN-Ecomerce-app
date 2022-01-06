import User from "../models/userModel.js";
import asyncHandler  from 'express-async-handler'



// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  public
const authUser = asyncHandler( async (req, res) =>{
    const { email , password } = req.body
    
    const user = await User.findOne({ email:email })
    
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token:null
        })
    }
    else
    {
        res.status(401);
        throw new Error('Invalid email or password');
    }

})


// @desc    Get users
// @route   GET /api/users
// @access  public
const getUsers = asyncHandler( async (req, res) =>{
    
    const users = await User.find({}) 


    res.json(users) 


})


export {authUser,getUsers}