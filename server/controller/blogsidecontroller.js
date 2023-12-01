import { BlogSidePosts } from "../models/BlogSidePostsModel.js";
import { RecentPosts } from "../models/BlogRecentPosts.js";

export const createBlogSidePosts = async (req, res) => {
    const blogSidePostsData = await BlogSidePosts.find({});
    const recentPosts = await RecentPosts.find({});
    res.json({
        blogSidePostsData, recentPosts
    });
}