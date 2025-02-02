import User from "../models/user.js";
import constants from "../config/constants.js";

const { DEFAULT_USERNAME } = constants;

export const getAllQuestionsForCategopry = async (categoryId) => {
    const userData = await User.findOne({ name: DEFAULT_USERNAME });

    const categories = userData.categories;
    const category = categories.id(categoryId);

    return category.questions.map(q => ({ question: q.body, answer: q.answer, id: q._id, }));
};