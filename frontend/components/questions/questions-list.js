'use client'

import { useQuery } from '@tanstack/react-query';
import QuestionsItem from './questions-item';
import { fetchQuestionsForCategory } from '@/lib/http';

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
            <ul>
                {questions.map(question => {
                    return (
                        <li key={question.id}>
                            <QuestionsItem question={question} />
                        </li>
                    )
                })}
            </ul>
        )
    }


}