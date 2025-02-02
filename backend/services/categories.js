import User from "../models/user.js";
import constants from "../config/constants.js";

const { DEFAULT_USERNAME } = constants;

export const getAllCategories = async () => {
    console.log('getting all the possible categories');
    // Temporary solution. at the moment we have only one user, one category. \
    // Later it should be enhanced with getAllQuestionsForUserInCategory, 
    // getRangeOfQuestionsforUserInCategory and etc etc

    const userData = await User.findOne({ name: DEFAULT_USERNAME });
    const categories = userData.categories.map(cat => ({ name: cat.name, id: cat._id }));
    return categories;
};