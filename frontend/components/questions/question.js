import css from './question.module.css'

export default function Question({ body }) {
    return (
        <div className={css.container}>
            <span className={css.question}>
                Question: {body}
            </span>
        </div>
    )
}