import path from "path";
import fs from 'fs/promises';
import connectDB from "./connect.js";
import { CustomerReviews } from "./models/CustomerReviewsModel.js";
import { PizzaReview } from "./models/PizzaReviewModel.js";
import { BlogSidePosts } from "./models/BlogSidePostsModel.js";
import { BlogReview } from "./models/BlogReviewModel.js";
import { Menu } from "./models/MenuModel.js";
import { Pizza } from "./models/PizzasModel.js";
import { SpecialMenu } from "./models/SpecialMenuModel.js";
import { Speciality } from "./models/OurSpecialityModel.js";
import { RecentPosts } from "./models/BlogRecentPosts.js";
import { LatestNews } from "./models/LatestNewsModel.js";
import { BestChef } from "./models/BestChefModel.js";
// const absolutePath = path.resolve('../client/src/assets/header-images/menu-list-images');

// async function postImageData() {
//     const images = [];
//     try {
//         const files = await fs.readdir(absolutePath);
//         files.forEach((file, i) => {
//             images.push({ id: i, path: path.join(absolutePath, file) });
//         });
//         return images;
//     } catch (err) {
//         console.error('Error reading directory:', err);
//         return [];
//     }
// }
// const images = await postImageData();

async function readJsonFile(filePath) {
    try {
      const absolutePath = path.resolve(filePath);
      const fileContent = await fs.readFile(absolutePath, 'utf-8');
      return JSON.parse(fileContent);
    } catch (error) {
      console.error('Error reading JSON file:', error);
      throw error;
    }
  }
const filePath = './data.json';
const data = await readJsonFile(filePath)

const start = async (model, data) => {
    try {
        await connectDB('mongodb+srv://aramsahakyan712:aram230379@cluster0.f9sut4v.mongodb.net/store?retryWrites=true&w=majority');
        await model.deleteMany();
        await model.create(data);
        console.log('Succsess!!!!');
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1)
    }
};
// start(Menu, data.foodMenu);