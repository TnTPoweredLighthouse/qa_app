import css from './answer.module.css'

export default function Answer({ body }) {
    return (
        <div className={css.container}>
            <span className={css.answer}>
                Answer: {body}
            </span>
        </div>
    )
}