import { BlogReview } from "../models/BlogReviewModel.js";

export const createBlogData = async (req, res) => {
    const blogData = await BlogReview.find({});
    res.json({
        blogData
    });
}