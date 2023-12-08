import { Menu } from "../models/MenuModel.js";

export const createMenuData = async (req, res) => {
    const foodMenuData = await Menu.find({});
    const filterByDrinks = await Menu.find({type: "drinks"});
    const filterBySalads = await Menu.find({type: "salads"});
    const filterByPastas = await Menu.find({type: "pasta"});
    const filterByBurgers = await Menu.find({type: "burgers"});
    const filterByDesserts = await Menu.find({type: "desserts"});
    const filterByPizzas= await Menu.find({type: "pizzas"});
    res.json({
        foodMenuData,
        filterByDrinks,
        filterBySalads,
        filterByPastas,
        filterByBurgers,
        filterByDesserts,
        filterByPizzas
    })
}
    