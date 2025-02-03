import QuestionsList from "@/components/questions/questions-list";
import css from './categories-page.module.css'

export default async function Category({ params }) {
    const { category } = await params

    return (
        <div className={css.container} >
            <QuestionsList category={category}></QuestionsList>
        </div>
    );
}
