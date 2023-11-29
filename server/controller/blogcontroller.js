import { Blog } from "../models/BlogModel.js";

export const createBlogData = async (req, res) => {
    const blogData = await Blog.find({});
    res.json({
        blogData
    });
}