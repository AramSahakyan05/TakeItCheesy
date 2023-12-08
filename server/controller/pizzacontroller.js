import { Pizza } from "../models/PizzasModel.js";
import { PizzaReview } from "../models/PizzaReviewModel.js";

export const createSelectedPizzaData = async (req, res) => {
        const itemName = req.params.name;
        const pizza_thumnails = await Pizza.find({});
        const pizza_review_data = await PizzaReview.find({});
        const selected_pizza = await Pizza.find({name: itemName });
        const related_products = await Pizza.find({}).limit(4);
        res.json({
        selected_pizza: selected_pizza[0],
        pizza_thumnails,
        related_products,
        pizza_review_data
        });
}
