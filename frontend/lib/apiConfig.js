import constants from '@/lib/constants'

const { HTTP, HTTPS } = constants

// const apiUrl = process.env.API_URL
const useHttps = false

// const apiFullUrl = `${useHttps ? HTTPS : HTTP}://${apiUrl}`;
const apiFullUrl = `http://localhost:3001/api/v1`;

export const apiConfig = {
    endpoints: {
        entities: `${apiFullUrl}/questions`,
        questionsForCategory: category => `${apiFullUrl}/questions/${category}`,
        categories: () => `${apiFullUrl}/categories`
    }
}