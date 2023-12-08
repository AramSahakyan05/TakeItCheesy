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
import { addUser, findUserByName } from './signup.js';
import { RegisteredUsers } from './models/RegisteredUsersModel.js';

const app = express();

const publicPath = path.join(path.resolve(), '../public');

app.use('/public', express.static(publicPath));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new passportLocal(findUserByName));


passport.serializeUser((user, done) => {
    done(null, user._id);
});
passport.deserializeUser(async (_id, done) => {
    const find_user_by_id = await RegisteredUsers.find({_id: _id});
    done(null, find_user_by_id);
});

app.get('/home', createHomeData);
app.get('/menu', createMenuData);
app.get("/menu/:name", createSelectedPizzaData);
app.get('/blog-leftside', createBlogSidePosts);
app.get('/blog-detail', createBlogData);

app.post('/login', passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/login'
}));

app.post('/signup', async (req, res) => {
    const {username, password} = req.body;
    const hashedPwd = await bcrypt.hash(password, 10);
    await addUser(username, hashedPwd);
    res.redirect('/login');
})
function checkAuthentication(req, res, next) {
    if(!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}
function checkNotAuthentication(req, res, next) {
    if(req.isAuthenticated()) {
        return res.redirect('/home');
    }
    next();
}

const start = async () => {
    try {
        await connectDB(process.env.db_url);
        app.listen(process.env.PORT, console.log(`Server is listening on port ${process.env.PORT}...`));
    } catch (error) {
        throw new Error(error);
    }
}
start();

