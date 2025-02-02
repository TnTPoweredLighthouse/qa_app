import mongoose from "mongoose";

export const QuestionSchema = new mongoose.Schema({
    priority: {
        type: Boolean,
        default: false
    },
    body: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    }
});