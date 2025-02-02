import { QueryClient } from '@tanstack/react-query'
import { apiConfig } from './apiConfig'

// TODO: https options and requests

export const queryClient = new QueryClient()

export async function fetchCategories() {
    const url = apiConfig.endpoints.categories()
    const response = await fetch(url);

    if (!response.ok) {
        const error = new Error('An error occurred while fetching the categories');
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }

    const { data } = await response.json()
    return data;
}

export async function fetchQuestionsForCategory(category) {
    const url = apiConfig.endpoints.questionsForCategory(category)
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