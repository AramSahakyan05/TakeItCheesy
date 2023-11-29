import mongoose from 'mongoose';

const connectDB = (url) => {
    return mongoose.connect(url)
}

export default connectDB







































// import express from 'express';
// import session from 'express-session';
// import {createPool} from 'mysql2/promise';
// import cors from 'cors';
// import bcrypt from 'bcrypt';
// import passport from 'passport';
// import passportLocal from 'passport-local'

// const pool = createPool({
//    host    : process.env.db_host,
//    user    : process.env.db_user,
//    password: process.env.db_password,
//    database: process.env.db_name 
// });

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false
// }));
// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new passportLocal(async (username, password, done) => {
//     const user = await pool.query('SELECT * FROM registered_users WHERE username = ?', [username]);

//     if(user === undefined) {
//         return done(null, null, {message: 'Incorrect username'});
//     }

//     if(await bcrypt.compare(password, user.user_password)) {
//         return done(null, user);
//     }

//     done(null, null, {message: 'Incorrect password'});
// }));
// // passport.serializeUser((user, done) => {
// //     done(null, user.id);
// // });
// // passport.deserializeUser(async (id, done) => {
// //     const find_user_by_id = await pool.query('SELECT * FROM registered_id WHERE id = ?', [id]);
// //     // console.log(find_user_by_id);
// //     done(null, find_user_by_id[0]);
// // });

// (async function() {
//     const header_menu_list = await pool.query('SELECT * FROM pizzas');
//     const our_speciality = await pool.query('SELECT * FROM our_speciality');
//     const filtered_special_menu = await pool.query('SELECT * FROM filtered_special_menu');
//     const filter_by_drinks = await pool.query('SELECT * FROM special_menu WHERE food_type = "drinks"');
//     const filter_by_salads = await pool.query('SELECT * FROM special_menu WHERE food_type = "salads"');
//     const filter_by_pastas = await pool.query('SELECT * FROM special_menu WHERE food_type = "pasta"');
//     const filter_by_burgers = await pool.query('SELECT * FROM special_menu WHERE food_type = "burgers"');
//     const filter_by_desserts = await pool.query('SELECT * FROM special_menu WHERE food_type = "desserts"');
//     const filter_by_pizzas = await pool.query('SELECT * FROM special_menu WHERE food_type = "pizzas"');
//     const food_menu = await pool.query('SELECT * FROM food_menu');
//     const food_menu_filter_by_drinks = await pool.query('SELECT * FROM food_menu WHERE food_type = "drinks"');
//     const food_menu_filter_by_salads = await pool.query('SELECT * FROM food_menu WHERE food_type = "salads"');
//     const food_menu_filter_by_pastas = await pool.query('SELECT * FROM food_menu WHERE food_type = "pasta"');
//     const food_menu_filter_by_burgers = await pool.query('SELECT * FROM food_menu WHERE food_type = "burgers"');
//     const food_menu_filter_by_desserts = await pool.query('SELECT * FROM food_menu WHERE food_type = "desserts"');
//     const food_menu_filter_by_pizzas = await pool.query('SELECT * FROM food_menu WHERE food_type = "pizzas"');
//     const blog_bar_layout = await pool.query('SELECT * FROM blog_sides_posts');
//     const recent_posts = await pool.query('SELECT * FROM blog_sides_recent_posts');
//     const blog_details = await pool.query('SELECT * FROM blog_detail_reviews');
//     const customer_reviews = await pool.query('SELECT * FROM customer_reviews');
//     const latest_news = await pool.query('SELECT * FROM latest_news');
//     const best_chefs = await pool.query('SELECT * FROM best_chef');
//     const related_products = await pool.query('SELECT * FROM pizzas WHERE id <= 4');
//     const pizza_reviews = await pool.query('SELECT * FROM pizza_reviews')

//     app.get('/home', (req, res)=> {
//         res.json({
//             header_menu_list: header_menu_list[0],
//             our_speciality: our_speciality[0],
//             foods: filtered_special_menu[0],
//             drinks: filter_by_drinks[0],
//             salads: filter_by_salads[0],
//             pastas: filter_by_pastas[0],
//             burgers: filter_by_burgers[0],
//             desserts: filter_by_desserts[0],
//             pizzas: filter_by_pizzas[0],
//             customer_reviews: customer_reviews[0],
//             latest_news: latest_news[0],
//             best_chefs: best_chefs[0]
//         });
//     });
//     app.get('/menu', (req, res)=> {
//         res.json({
//             food_menu: food_menu[0],
//             food_menu_drinks: food_menu_filter_by_drinks[0],
//             food_menu_salads: food_menu_filter_by_salads[0],
//             food_menu_pastas: food_menu_filter_by_pastas[0],
//             food_menu_burgers: food_menu_filter_by_burgers[0],
//             food_menu_desserts: food_menu_filter_by_desserts[0],
//             food_menu_pizzas: food_menu_filter_by_pizzas[0],
//         })
//     });
//     app.get("/menu/:id", async (req, res) => {
//       try {
//           const itemId = req.params.id;
//           const selected_pizza = await pool.query('SELECT * FROM pizzas WHERE id = ?', [itemId]);
//           const pizza_thumnails = await pool.query('SELECT * FROM pizzas');
//           res.json({
//             selected_pizza: selected_pizza[0][0],
//             pizza_thumnails: pizza_thumnails[0],
//             related_products: related_products[0],
//             pizza_reviews: pizza_reviews[0]
//           });
//         } catch (error) {
//           console.error('Error fetching menu item:', error.message);
//         }
//     });
//     app.get('/blog-leftside', (req, res) => {
//         res.json({
//             blog_sidebar: blog_bar_layout[0],
//             recent_posts: recent_posts[0]
//         });
//     })
//     app.get('/blog-detail', (req, res) => {
//         res.send(blog_details[0]);
//     })
// })();

// app.post('/login', passport.authenticate('local', {
//     successRedirect: '/home',
//     failureRedirect: 'login'
// }));

// app.post('/signup', async (req, res) => {
//     const {username, password, confirmed_password} = req.body;
//     const hashedPwd = await bcrypt.hash(password, 10);
//     await pool.query(
//         `INSERT INTO registered_users(username, user_password, user_confirmed_password) VALUES(?, ?, ?)`,
//         [username, hashedPwd, hashedPwd]
//     );
//     res.redirect('/login');
// })


// app.listen(4000);