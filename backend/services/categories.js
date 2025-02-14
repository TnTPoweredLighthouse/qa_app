import User from "../models/user.js";
import constants from "../config/constants.js";

const { DEFAULT_USERNAME } = constants;

export const getAllCategories = async (username = DEFAULT_USERNAME) => {
    return await User.aggregate([
        {
            $match: {
                "name": username
            }
        },
        {
            "$unwind": "$categories"
        },
        {
            $project: {
                "_id": 0,
                "name": "$categories.name",
                "id": "$categories._id",
                "questionsQuantity": {
                    $size: "$categories.questions"
                }
            }
        }
    ]);
};