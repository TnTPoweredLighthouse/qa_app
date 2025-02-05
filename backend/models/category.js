import mongoose from "mongoose";
import { QuestionSchema } from "./question.js";

export const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    questions: {
        type: [QuestionSchema]
    }
});