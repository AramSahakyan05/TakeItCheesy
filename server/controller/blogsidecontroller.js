import { BlogSidePosts } from "../models/BlogSidePostsModel.js";

export const createBlogSidePosts = async (req, res) => {
    const blogSidePostsData = await BlogSidePosts.find({});
    res.json({
        blogSidePostsData
    });
}