import css from './question.module.css'

export default function Question({ body }) {
    return (
        <div className={css.container}>
            <div className={css.question}>
                <div>
                    Question:
                </div>
                <div className={css['question-body']}>
                    {body}
                </div>
            </div>
        </div>
    )
}