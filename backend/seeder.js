import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async ()=>{
    try {
        //cleaning database from data
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        //inserting data to db from local data in js files
        const createdUsers = await User.insertMany(users);
        const admnUser = createdUsers[0]._id;
            //add user 0 admin to the Liste of all the products
        const samplePrducts = products.map(product=>{
            return {...product,user:admnUser}
        })

        await Product.insertMany(samplePrducts);


        console.log('Data imported!'.green.inverse);




    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
        
    }
}

const destroyData = async ()=>{
    try {
        //cleaning database from data
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        

        console.log('Data  destroyed!'.red.inverse);




    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
        
    }
}

if(process.argv[2]==='-d'){
    destroyData();
}else{
    importData();
}