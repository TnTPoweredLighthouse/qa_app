import { useCallback, useState } from "react";
import { questionsPaginationConfig } from '@/config/config';

const { additionalyLoadedQty } = questionsPaginationConfig

export default function usePagination(initialItems, fetchMore) {
    const [loadedQuestions, setLoadedQuestions] = useState(initialItems);
    const [apiCallOffset, setapiCallOffset] = useState(initialItems.length)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [loadFinished, setLoadFinished] = useState(false)


    const loadBatch = useCallback(async () => {
        let loaded = []
        setIsError(false)
        try {
            setIsLoading(true)
            loaded = await fetchMore(apiCallOffset, additionalyLoadedQty)
        } catch (e) {
            setIsLoading(false);
            setIsError(true)
            console.log('error loading next batch of questions', e)
        }
        if (!loaded.length) {
            setLoadFinished(true)
        }

        setapiCallOffset(apiCallOffset => apiCallOffset + additionalyLoadedQty)
        setIsLoading(false);
        setLoadedQuestions(questions => [...questions, ...loaded])

    }, [fetchMore, apiCallOffset])


    return { loadedQuestions, loadBatch, isLoading, isError, loadFinished }
}