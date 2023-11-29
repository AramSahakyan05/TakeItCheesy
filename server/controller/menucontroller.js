import { Menu } from "../models/MenuModel.js";

export const createMenuData = async (req, res) => {
    const foodMenuData = await Menu.find({});
    res.json({
        foodMenuData
    })
}
    