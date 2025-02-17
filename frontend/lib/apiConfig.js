import constants from '@/lib/constants'

const { HTTP, HTTPS } = constants

const apiUrl = process.env.API_URL || 'localhost:3001/api/v1'
const useHttps = false

const apiFullUrl = `${useHttps ? HTTPS : HTTP}://${apiUrl}`;

export const apiConfig = {
    endpoints: {
        questionsForCategory: category => `${apiFullUrl}/questions/${category}`,
        categories: () => `${apiFullUrl}/categories`
    }
}