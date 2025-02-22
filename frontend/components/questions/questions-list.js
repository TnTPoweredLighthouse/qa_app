'use client'

import QuestionsListItem from './questions-list-item';
import { useCallback, useState } from 'react';

import Button from '@mui/material/Button';

import { fetchQuestionsForCategory } from '@/actions/fetchQuestions';
import usePagination from '@/hooks/usePagination';
import { questionsPaginationConfig } from '@/config/config';

import css from './questions-list.module.css';

const { loadThreshold } = questionsPaginationConfig

export default function QuestionsList({ initialQuestions, categoryId }) {
    const fetchMore = useCallback(async (offset, limit) => {
        return await fetchQuestionsForCategory(categoryId, offset, limit)
    }, [categoryId])

    const { isLoading, isError, loadedQuestions, loadBatch } = usePagination(initialQuestions, fetchMore)
    const [shownQuestions, setShownQuestions] = useState([])


    const showNext = async () => {
        if (shownQuestions.at(-1) && shownQuestions.at(-1).hideAnswer) {
            // show answer
            setShownQuestions(questions => {
                const updated = [...questions];
                updated[questions.length - 1].hideAnswer = false
                return updated;
            });
            return;
        }

        // add new question to the ui
        if (loadedQuestions.length - shownQuestions.length <= loadThreshold) {
            await loadBatch()
        }

        setShownQuestions(questions => [...questions, { data: loadedQuestions[questions.length], hideAnswer: true }]);
    }

    if (shownQuestions) {
        return (
            <div className={css.container}>
                <div className={css['questions-container']}>
                    <ul >
                        {shownQuestions.map(({ data, hideAnswer }) => {
                            return (
                                <li key={data.id}>
                                    <QuestionsListItem question={data} hideAnswer={hideAnswer} />
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className={css['buttons-container']}>
                    {isError ? <>Error!</> : ''}
                    <Button variant="contained" loading={isLoading} onClick={showNext}>Show more</Button>
                </div>
            </div>
        )
    }
}