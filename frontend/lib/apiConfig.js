import constants from '@/lib/constants'

const { HTTP, HTTPS, OFFSET_KEY, LIMIT_KEY } = constants

const apiUrl = process.env.API_URL || 'localhost:3001/api/v1'
const useHttps = false

const apiFullUrl = `${useHttps ? HTTPS : HTTP}://${apiUrl}`;

function formatQueryParams(params) {
    const paramsStrings = [];

    for (let paramName in params) {
        if (params[paramName]) {
            paramsStrings.push(`${paramName}=${params[paramName]}`)
        }
    }
    if (paramsStrings.length) {
        return `?${paramsStrings.join('&')}`
    }
    return ''
}

export const apiConfig = {
    endpoints: {
        entities: `${apiFullUrl}/questions`,
        questionsForCategory: (category, offset, limit) => `${apiFullUrl}/questions/${category}${formatQueryParams({ [OFFSET_KEY]: offset, [LIMIT_KEY]: limit })}`,
        categories: () => `${apiFullUrl}/categories`
    }
}