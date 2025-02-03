'use client'

import { useQuery } from '@tanstack/react-query';
import QuestionsListItem from './questions-list-item';
import { fetchQuestionsForCategory } from '@/lib/http';

import css from './questions-list.module.css'

export default function QuestionsList({ category }) {

    const { data: questions, isLoading, isError, error } = useQuery({
        queryKey: ['questions'],
        queryFn: async () => await fetchQuestionsForCategory(category),
    });


    if (isLoading) {
        return (
            <div>
                Loading
            </div>
        )
    }

    if (isError) {
        return (
            <div>
                Error fetching categories: {error.text}
            </div>
        )
    }


    if (questions) {
        return (
            <ul className={css.container}>
                {questions.map(question => {
                    return (
                        <li key={question.id}>
                            <QuestionsListItem question={question} />
                        </li>
                    )
                })}
            </ul>
        )
    }
}