'use client'

import QuestionsListItem from './questions-list-item';
import { useCallback, useEffect, useRef, useState } from 'react';

import Button from '@mui/material/Button';

import { fetchQuestionsForCategory } from '@/actions/fetchQuestions';
import usePagination from '@/hooks/usePagination';
import { questionsPaginationConfig } from '@/config/config';

import css from './questions-list.module.css';

const { loadThreshold } = questionsPaginationConfig

export default function QuestionsList({ initialQuestions, categoryId }) {
    const fetchMore = useCallback(async (offset, limit) => {
        return await fetchQuestionsForCategory({ category: categoryId, offset, limit })
    }, [categoryId])

    const { isLoading, isError, loadedQuestions, loadBatch, loadFinished } = usePagination(initialQuestions, fetchMore)
    const [shownQuestions, setShownQuestions] = useState([])
    const questionsContainer = useRef(null)

    useEffect(() => {
        questionsContainer.current.scroll({ top: questionsContainer.current.scrollHeight, behavior: "smooth" })
    }, [questionsContainer?.current?.scrollHeight, loadedQuestions.length])


    const showNext = async () => {
        if (shownQuestions.at(-1) && !shownQuestions.at(-1).showAnswer) {
            // show answer
            setShownQuestions(questions => {
                const updated = [...questions];
                updated[questions.length - 1].showAnswer = true
                return updated;
            });
            return;
        }

        // add new question to the ui
        if (loadedQuestions.length - shownQuestions.length <= loadThreshold && !loadFinished) {
            await loadBatch()
        }

        if (shownQuestions.length < loadedQuestions.length) {
            setShownQuestions(questions => [...questions, { data: loadedQuestions[questions.length], showAnswer: false }]);
        }
    }

    if (shownQuestions) {
        const isNothingToShowMore = shownQuestions.length >= loadedQuestions.length && shownQuestions.at(-1).showAnswer;

        return (
            <div className={css.container}>
                <div ref={questionsContainer} className={css['questions-container']}>
                    <ul >
                        {shownQuestions.map(({ data, showAnswer }) => {
                            return (
                                <li key={data.id}>
                                    <QuestionsListItem question={data} showAnswer={showAnswer} />
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className={css['buttons-container']}>
                    {isError ? 'Error!' : ''}
                    <Button disabled={isNothingToShowMore} variant="contained" loading={isLoading} onClick={showNext}>{isNothingToShowMore ? "Finished" : "Show more"}</Button>
                </div>
            </div>
        )
    }
}