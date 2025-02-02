import mongoose from "mongoose";
import { CategorySchema } from "./category.js";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    categories: {
        type: [CategorySchema]
    }
});

const User = mongoose.model('User', UserSchema);

export default User;