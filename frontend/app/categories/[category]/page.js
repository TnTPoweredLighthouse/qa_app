import {Suspense} from 'react';
import QuestionsList from "@/components/questions/questions-list";
import { fetchQuestionsForCategory } from '@/lib/http';

import css from './categories-page.module.css'

const Questions = async ({category}) => {
   
    const questions = await fetchQuestionsForCategory(category);

    return (
        <div className={css.container}>
            <QuestionsList questions={questions} />
        </div>
    );
}

export default async function CategoryPage({ params }) {
    const { category } = await params
    
    return (
        <div className={css.container} >
            <Suspense fallback={<div>Loading...</div>}> 
                <Questions category={category} />
            </Suspense>
        </div>
    );
}
