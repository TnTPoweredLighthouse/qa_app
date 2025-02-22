import { Suspense } from 'react';
import QuestionsList from "@/components/questions/questions-list";
import { fetchQuestionsForCategory } from '@/actions/fetchQuestions';

import css from './categories-page.module.css'

const initialNumberOfQuestions = 5; // TODO: move to constants

export default async function CategoryPage({ params }) {
    const { category } = await params
    const questions = await fetchQuestionsForCategory(category, 0, initialNumberOfQuestions);

    return (
        <div className={css.container} >
            <Suspense fallback={<div>Loading...</div>}>
                <QuestionsList initialQuestions={questions} categoryId={category} />
            </Suspense>
        </div>
    );
}
