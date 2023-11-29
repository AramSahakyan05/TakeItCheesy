import express from 'express';
import path from 'path';    
import session from 'express-session';
import cors from 'cors';
import bcrypt from 'bcrypt';
import passport from 'passport';
import passportLocal from 'passport-local';
import connectDB from './connect.js';
import { createHomeData } from './controller/homecontroller.js';
import { createMenuData } from './controller/menucontroller.js';
import { createBlogData } from './controller/blogcontroller.js';
import { createSelectedPizzaData } from './controller/pizzacontroller.js';
import { createBlogSidePosts } from './controller/blogsidecontroller.js';
const app = express();


const publicPath = path.join(path.resolve(), '../public');
app.use('/public', express.static(publicPath));


app.use(express.json());
// app.get('/', (req, res) => {
//     res.redirect('signup')
// })
app.get('/home', createHomeData);
app.get('/menu', createMenuData);
app.get("/menu/:id", createSelectedPizzaData);
app.get('/blog-leftside', createBlogSidePosts);
app.get('/blog-detail', createBlogData);

const start = async () => {
    try {
        await connectDB(process.env.db_url);
        app.listen(process.env.PORT, console.log(`Server is listening on port ${process.env.PORT}...`));
    } catch (error) {
        throw new Error(error);
    }
}
start();

