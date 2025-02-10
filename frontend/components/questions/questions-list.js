
import QuestionsListItem from './questions-list-item';
import css from './questions-list.module.css'

export default function QuestionsList({ questions }) {

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