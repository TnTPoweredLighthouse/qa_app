import User from "../models/user.js";
import constants from "../config/constants.js";

const { DEFAULT_USERNAME } = constants;

const userData = {
    name: DEFAULT_USERNAME,
    categories: [
        {
            name: 'Pre-defined questions',
            questions: [
                {
                    body: 'What is the answer to the ultimate Question of Life, the Universe, and Everything?',
                    answer: '42'
                },
                {
                    body: 'Who let the dogs out?',
                    answer: 'Bark(x5)'
                }
            ]
        },
        {
            name: 'Pre-defined questions-2',
            questions: [
                {
                    body: 'Why did the chicken cross the road?',
                    answer: 'To get to the other side.'
                },
            ]
        }
    ]
};

export const seed = async function () {
    console.log('db seeding in progress...');
    try {
        const existing = await User.findOne();
        if (existing) {
            console.log("DB contains values, seeding is skipped;");
        } else {
            const seedUser = new User(userData);
            await seedUser.save();
            console.log('DB seed done.');
        }
    } catch (e) {
        console.log('DB seeing failed, ', e);
    }
};
