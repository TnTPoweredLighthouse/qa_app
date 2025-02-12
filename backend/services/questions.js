import User from "../models/user.js";
import constants from "../config/constants.js";
import mongoose from "mongoose";

const { DEFAULT_USERNAME } = constants;

export const getAllQuestionsForCategopry = async (config) => {
    const { username = DEFAULT_USERNAME, categoryId, offset = 0, limit = -1 } = config;

    const aggregationSteps = [
        {
            $match: {
                "name": username
            }
        },
        {
            "$unwind": "$categories"
        },
        {
            "$replaceRoot": {
                "newRoot": "$categories"
            }
        },
        {
            $match: {
                "_id": new mongoose.Types.ObjectId(categoryId)
            }
        },
        {
            "$unwind": "$questions"
        },
        {
            "$skip": offset
        },
        {
            "$replaceRoot": {
                "newRoot": "$questions"
            }
        },
        {
            $project: {
                "answer": 1,
                "question": "$body",
                _id: 0
            }
        }
    ];

    if (limit > 0) {
        aggregationSteps.push(
            {
                "$limit": limit
            },
        );
    }

    return await User.aggregate(aggregationSteps);
};