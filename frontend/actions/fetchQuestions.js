'use server'

import { apiConfig } from "@/lib/apiConfig";

export async function fetchQuestionsForCategory(category, offset, limit) {
    const url = apiConfig.endpoints.questionsForCategory(category, offset, limit)

    const response = await fetch(url);

    if (!response.ok) {
        const error = new Error('An error occurred while fetching the questions');
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }

    const { data } = await response.json()
    return data;
}