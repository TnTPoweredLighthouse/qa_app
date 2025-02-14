import css from './answer.module.css'

export default function Answer({ body }) {
    return (
        <div className={css.container}>
            <div className={css.answer}>
                <div>Answer: </div>
                <div className={css['answer-body']}>
                    {body}
                </div>
            </div>
        </div >
    )
}