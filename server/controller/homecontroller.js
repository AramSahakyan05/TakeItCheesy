import { Pizza } from "../models/PizzasModel.js";
import { Speciality } from "../models/OurSpecialityModel.js";
import { BestChef } from "../models/BestChefModel.js";
import { LatestNews } from "../models/LatestNewsModel.js";
import { CustomerReviews } from "../models/CustomerReviewsModel.js";
import { SpecialMenu } from "../models/SpecialMenuModel.js";

export const createHomeData = async (req, res) => {
    const pizzaData = await Pizza.find({});
    const specialityData = await Speciality.find({});
    const specialMenuData = await SpecialMenu.find({});
    const bestChefData = await BestChef.find({});
    const latestNewsData = await LatestNews.find({});
    const customerReviewsData = await CustomerReviews.find({});

    res.json({
        pizzaData,specialityData,specialMenuData,bestChefData,latestNewsData,customerReviewsData
    });
}