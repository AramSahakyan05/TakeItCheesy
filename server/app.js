import express from 'express';  
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
import { addUser, checkLogin, checkSignUp, findUserByName } from './signup.js';
import { RegisteredUsers } from './models/RegisteredUsersModel.js';

const app = express();

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
    console.log("serializeUser function called");
});
passport.deserializeUser(async (_id, done) => {
    try {
      const find_user_by_id = await RegisteredUsers.findById(_id);
  
      if (!find_user_by_id) {
        return done(null, false);
      }
  
      done(null, find_user_by_id);
    } catch (error) {
      done(error);
    }
    console.log("deserializeUser function called");
  });

app.post('/signup', async (req, res) => {
  await checkSignUp(req, res);
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const userExists = await checkLogin(username, password);

    if (userExists) {
      res.status(200).json({ success: true });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong, try again" });
  }
});
// app.use(checkAuthentication);

app.get('/home', createHomeData);
app.get('/menu', createMenuData);
app.get("/menu/:name", createSelectedPizzaData);
app.get('/blog-leftside', createBlogSidePosts);
app.get('/blog-detail', createBlogData);

app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err);
    } else {
      res.clearCookie('connect.sid');
      res.status(200).json({ route: '/login' });
    }
  });
});

// function checkAuthentication(req, res, next) {
//     if (req.isAuthenticated() === false) {
//       return res.redirect('/login');
//     }
//     return next();
// }
// function checkNotAuthentication(req, res, next) {
//   if(req.isAuthenticated() === true) {
//       return res.redirect('/home');
//   }
//   next();
// }

const start = async () => {
    try {
        await connectDB(process.env.db_url);
        app.listen(process.env.PORT, console.log(`Server is listening on port ${process.env.PORT}...`));
    } catch (error) {
        throw new Error(error);
    }
}
start();

